import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Department } from '../departments/department.entity';

@Entity()
export class Region {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  population: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  unemployed: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  young: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  senior: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  noDiploma: number;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // poverty: number;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // livingStandard: number;

  @OneToMany(() => Department, (department) => department.region)
  departments: Department[];
}
