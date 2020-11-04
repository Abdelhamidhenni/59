import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class Municipality {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  zipCode: string;

  @ApiProperty()
  @Column()
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

  @ApiProperty()
  @Column()
  departmentId: number;
  @ManyToOne(() => Department)
  @JoinColumn()
  department?: Department;
}
