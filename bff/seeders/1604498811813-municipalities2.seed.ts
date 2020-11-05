import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Municipality } from '../src/modules/municipalities/municipality.entity';
import * as municipalities from './datas/municipalities-2.json';

export default class CreateMunicipality implements Seeder {
  run = async (_factory: Factory, connection: Connection): Promise<any> =>
    await connection.createQueryBuilder().insert().into(Municipality).values(municipalities).execute();
}
