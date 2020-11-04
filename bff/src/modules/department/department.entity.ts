import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Municipality } from '../municipality/municipality.entity';
import { Region } from '../region/region.entity';

@Entity()
export class Department {
  @ApiProperty()
  @PrimaryColumn()
  id: string;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  regionId: number;
  @ManyToOne(() => Region)
  @JoinColumn()
  region?: Region;

  @OneToMany(() => Municipality, (municipality) => municipality.department)
  municipalities: Municipality[];
}
