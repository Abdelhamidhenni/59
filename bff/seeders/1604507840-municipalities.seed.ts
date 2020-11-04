import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import { Municipality } from '../src/modules/municipality/municipality.entity';
import * as municipality from './datas/municipalities.json';

export default class CreateMunicipality implements Seeder {
  run = (_factory: Factory, connection: Connection): Promise<any> =>
    connection.createQueryBuilder().insert().into(Municipality).values(municipality).execute();
}
