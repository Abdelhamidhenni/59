import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Municipality } from './municipality.entity';
import { Repository, Like } from 'typeorm';

@Injectable()
export class MunicipalitiesService {
  constructor(
    @InjectRepository(Municipality)
    private readonly municipalityRepository: Repository<Municipality>,
  ) {}

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
      select: [
        'id',
        'interfaceAccess',
        'informationAccess',
        'globalAccess',
        'administrativeCompetence',
        'numericCompetence',
        'globalCompetence',
        'globalScore',
      ],
    });
  }
}
