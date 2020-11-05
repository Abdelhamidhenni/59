import {MigrationInterface, QueryRunner} from "typeorm";

export class updateMunicipalityTable1604588982569 implements MigrationInterface {
    name = 'updateMunicipalityTable1604588982569'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "no_diploma"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "senior"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "young"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "unemployed"`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "administrative_competence" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "numeric_competence" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "global_competence" integer`);
        await queryRunner.query(`ALTER TABLE "region" ADD "population" integer`);
        await queryRunner.query(`ALTER TABLE "region" ADD "unemployed" integer`);
        await queryRunner.query(`ALTER TABLE "region" ADD "young" integer`);
        await queryRunner.query(`ALTER TABLE "region" ADD "senior" integer`);
        await queryRunner.query(`ALTER TABLE "region" ADD "no_diploma" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "no_diploma"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "senior"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "young"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "unemployed"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "population"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "global_competence"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "numeric_competence"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "administrative_competence"`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "unemployed" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "young" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "senior" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "no_diploma" integer`);
    }

}
