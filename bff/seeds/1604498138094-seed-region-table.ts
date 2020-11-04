import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedRegionTable1604498138094 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO region(id, name) VALUES ('01','GUADELOUPE'),('02','MARTINIQUE'),('03','GUYANE'),('04','LA REUNION'),('06','MAYOTTE'),('11','ILE-DE-FRANCE'),('24','CENTRE-VAL DE LOIRE'),('27','BOURGOGNE-FRANCHE-COMTE'),('28','NORMANDIE'),('32','HAUTS DE FRANCE'),('44','GRAND EST'),('52','PAYS DE LA LOIRE'),('53','BRETAGNE'),('75','NOUVELLE AQUITAINE'),('76','OCCITANIE'),('84','AUVERGNE-RHONE-ALPES'),('93','PROVENCE-ALPES-COTE D''AZUR'),('94','CORSE')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`TRUNCATE TABLE region RESTART IDENTITY`);
  }
}
