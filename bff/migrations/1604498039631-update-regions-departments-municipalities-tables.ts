import {MigrationInterface, QueryRunner} from "typeorm";

export class updateRegionsDepartmentsMunicipalitiesTables1604498039631 implements MigrationInterface {
    name = 'updateRegionsDepartmentsMunicipalitiesTables1604498039631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "municipality" DROP CONSTRAINT "FK_ef206b4e9d45595ebf259352342"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "department_id"`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "department_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1"`);
        await queryRunner.query(`ALTER TABLE "region" DROP CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "region" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "region" ADD CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "PK_9a2213262c1593bffb581e382f5"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "department" ADD "id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "region_id"`);
        await queryRunner.query(`ALTER TABLE "department" ADD "region_id" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD CONSTRAINT "FK_ef206b4e9d45595ebf259352342" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1"`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP CONSTRAINT "FK_ef206b4e9d45595ebf259352342"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "region_id"`);
        await queryRunner.query(`ALTER TABLE "department" ADD "region_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "department" DROP CONSTRAINT "PK_9a2213262c1593bffb581e382f5"`);
        await queryRunner.query(`ALTER TABLE "department" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "department" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "PK_9a2213262c1593bffb581e382f5" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "region" DROP CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da"`);
        await queryRunner.query(`ALTER TABLE "region" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "region" ADD "id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "region" ADD CONSTRAINT "PK_5f48ffc3af96bc486f5f3f3a6da" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "department" ADD CONSTRAINT "FK_f41378c2a0338b25694ff3dc8a1" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "municipality" DROP COLUMN "department_id"`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD "department_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "municipality" ADD CONSTRAINT "FK_ef206b4e9d45595ebf259352342" FOREIGN KEY ("department_id") REFERENCES "department"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
