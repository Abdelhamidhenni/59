import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'src/modules/departments/department.entity';
import { Municipality } from 'src/modules/municipalities/municipality.entity';
import { Region } from 'src/modules/regions/region.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
    @InjectRepository(Department)
    private readonly departmentRepository: Repository<Department>,
  ) {}

  async findFirstHundred(): Promise<Municipality[]> {
    return await this.municipalityRepository.find({
      select: ['id', 'name', 'zipCode', 'population'],
      relations: ['department', 'department.region'],
      take: 10,
    });
  }

  async findWithName(name: string): Promise<Municipality[]> {
    return await this.municipalityRepository.find({
      select: ['id', 'name', 'zipCode', 'population'],
      relations: ['department', 'department.region'],
      take: 10,
      where: {
        name: Like(`%${name}%`),
      },
    });
  }

  async findOne(id: number): Promise<Municipality> {
    return await this.municipalityRepository.findOne(id, {
      select: ['id', 'administrativeCompetence', 'numericCompetence', 'globalCompetence'],
    });
  }
}
