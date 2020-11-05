import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Municipality } from '../src/modules/municipality/municipality.entity';
import * as municipalities from './datas/municipalities-7.json';

export default class CreateMunicipality implements Seeder {
  run = async (_factory: Factory, connection: Connection): Promise<any> =>
    await connection.createQueryBuilder().insert().into(Municipality).values(municipalities).execute();
}
