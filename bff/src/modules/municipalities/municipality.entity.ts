import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from '../departments/department.entity';

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
  interfaceAccess: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  informationAccess: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  globalAccess: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  administrativeCompetence: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  numericCompetence: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  globalCompetence: number;

  @ApiProperty({ required: false })
  @Column({ nullable: true })
  globalScore: number;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // poverty: number;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // livingStandard: number;

  @ApiProperty()
  @Column()
  departmentId: string;
  @ManyToOne(() => Department)
  @JoinColumn()
  department?: Department;
}
