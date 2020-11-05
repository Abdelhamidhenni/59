import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/modules/department/department.entity';
import { Municipality } from 'src/municipalities/municipality.entity';
import { Region } from 'src/modules/region/region.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>,
  ) {}

  async findFirstHundred(): Promise<Municipality[]> {
    return await this.municipalityRepository.find({
      select: ['id', 'name', 'zipCode'],
      relations: ['department', 'department.region'],
      take: 10,
    });
  }

  async getMunicipalityResults(id: number): Promise<any> {
    const {
      population,
      unemployed,
      young,
      senior,
      noDiploma,
      department: { regionId },
    } = await this.municipalityRepository.findOne(id, {
      relations: ['department', 'department.region'],
    });

    const departments = await this.departmentRepository.find({ select: ['id'], where: { regionId } });
    const departmentIds = departments.map(({ id: departmentId }) => departmentId);

    const {
      sumPopulation,
      sumUnemployed,
      sumYoung,
      sumSenior,
      sumNoDiploma,
    } = await this.municipalityRepository
      .createQueryBuilder('municipality')
      .select('SUM(municipality.population)', 'sumPopulation')
      .addSelect('SUM(municipality.unemployed)', 'sumUnemployed')
      .addSelect('SUM(municipality.young)', 'sumYoung')
      .addSelect('SUM(municipality.senior)', 'sumSenior')
      .addSelect('SUM(municipality.noDiploma)', 'sumNoDiploma')
      .where('municipality.departmentId IN (:...ids)', { ids: departmentIds })
      .getRawOne();

    const thresholdUnemployed = sumUnemployed / sumPopulation;
    const thresholdYoung = sumYoung / sumPopulation;
    const thresholdSenior = sumSenior / sumPopulation;
    const thresholdNoDiploma = sumNoDiploma / sumPopulation;

    const partUnemployed = unemployed / population;
    const partYoung = young / population;
    const partSenion = senior / population;
    const partNoDiploma = noDiploma / population;

    const administrative = Math.round(
      (((partUnemployed - thresholdUnemployed) / thresholdUnemployed + 1) * 100 +
        ((partYoung - thresholdYoung) / thresholdYoung + 1) * 100) /
        2,
    );

    const numerique = Math.round(
      (((partNoDiploma - thresholdNoDiploma) / thresholdNoDiploma + 1) * 100 +
        ((partSenion - thresholdSenior) / thresholdSenior + 1) * 100) /
        2,
    );

    return {
      competence: {
        administrative,
        numerique,
        global: (administrative + numerique) / 2,
      },
    };
  }
}
