import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';

import * as regions from './datas/regions.json';
import { Region } from '../src/modules/regions/region.entity';

export default class CreateRegion implements Seeder {
  run = async (_factory: Factory, connection: Connection): Promise<any> =>
    await connection.createQueryBuilder().insert().into(Region).values(regions).execute();
}
