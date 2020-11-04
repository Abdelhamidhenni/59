import { MigrationInterface, QueryRunner } from 'typeorm';

export class addRegionsDepartmentsMunicipalitiesTables1604496994446 implements MigrationInterface {
  name = 'addRegionsDepartmentsMunicipalitiesTables1604496994446';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "municipality" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "zip_code" character varying NOT NULL, "population" integer NOT NULL, "unemployed" integer, "young" integer, "senior" integer, "no_diploma" integer, "department_id" integer NOT NULL, CONSTRAINT "PK_281ad341f20df7c41b83a182e2a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "region" ("id" integer NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "department" ("id" integer NOT NULL, "name" character varying NOT NULL, "region_id" integer NOT NULL, CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "municipality" ADD CONSTRAINT "FK_ef206b4e9d45595ebf259352342" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "department" ADD CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1"`);
    await queryRunner.query(`ALTER TABLE "municipality" DROP CONSTRAINT "FK_ef206b4e9d45595ebf259352342"`);
    await queryRunner.query(`DROP TABLE "department"`);
    await queryRunner.query(`DROP TABLE "region"`);
    await queryRunner.query(`DROP TABLE "municipality"`);
  }
}
