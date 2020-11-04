import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class Region {
  @ApiProperty()
  @PrimaryColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(() => Department, (department) => department.region)
  departments: Department[];
}
