import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import * as departments from './datas/departments.json';
import { Department } from '../src/modules/departments/department.entity';

export default class CreateDepartment implements Seeder {
  run = async (_factory: Factory, connection: Connection): Promise<any> =>
    await connection.createQueryBuilder().insert().into(Department).values(departments).execute();
}
