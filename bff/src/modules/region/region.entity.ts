import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Department } from '../department/department.entity';

@Entity()
export class Region {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // poverty: number;

  // @ApiProperty({ required: false })
  // @Column({ nullable: true })
  // livingStandard: number;

  @OneToMany(() => Department, (department) => department.region)
  departments: Department[];
}
