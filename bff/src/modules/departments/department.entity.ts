import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Municipality } from '../municipalities/municipality.entity';
import { Region } from '../regions/region.entity';

@Entity()
export class Department {
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

  @ApiProperty()
  @Column()
  regionId: string;
  @ManyToOne(() => Region)
  @JoinColumn()
  region?: Region;

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}
