import {MigrationInterface, QueryRunner} from "typeorm";

export class updateMunicipalityTable1604599188505 implements MigrationInterface {
    name = 'updateMunicipalityTable1604599188505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "municipality" ADD "interface_access" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "information_access" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "global_access" integer`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "global_score" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "global_score"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "global_access"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "information_access"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "interface_access"`);
    }

}
