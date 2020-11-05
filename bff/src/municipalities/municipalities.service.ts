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

  async findOne(id: number): Promise<Municipality> {
    return await this.municipalityRepository.findOne(id);
  }

  async findFirstHundred(): Promise<Municipality[]> {
    return await this.municipalityRepository.find({
      select: ['id', 'name', 'zipCode'],
      relations: ['department', 'department.region'],
      take: 10,
    });
  }
}
