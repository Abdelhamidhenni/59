import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from '../departments/department.entity';
import { Region } from '../regions/region.entity';
import { MunicipalitiesController } from './municipalities.controller';
import { MunicipalitiesService } from './municipalities.service';
import { Municipality } from './municipality.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Municipality]),
    TypeOrmModule.forFeature([Department]),
    TypeOrmModule.forFeature([Region]),
  ],
  controllers: [MunicipalitiesController],
  providers: [MunicipalitiesService],
})
export class MunicipalitiesModule {}
