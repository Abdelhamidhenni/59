import { MigrationInterface, QueryRunner } from 'typeorm';

export class seedRegionTable1604497681217 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO region(id, name) VALUES (,''), (,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),(,''),`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
