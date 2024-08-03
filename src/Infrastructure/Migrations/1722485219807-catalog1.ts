import { MigrationInterface, QueryRunner } from "typeorm";

export class Catalog11722485219807 implements MigrationInterface {
    name = 'Catalog11722485219807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Products\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(200) NOT NULL, \`count\` int NOT NULL DEFAULT '0', \`price\` text NOT NULL, \`categoryProductId\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_36a07cc432789830e7fb7b58a8\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`CategoryProduct\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(200) NOT NULL, UNIQUE INDEX \`IDX_45497de3ad829e28ee0eaef29b\` (\`id\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Products\` ADD CONSTRAINT \`FK_9e008ae286a8d19351ea1ab5c86\` FOREIGN KEY (\`categoryProductId\`) REFERENCES \`CategoryProduct\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Products\` DROP FOREIGN KEY \`FK_9e008ae286a8d19351ea1ab5c86\``);
        await queryRunner.query(`DROP INDEX \`IDX_45497de3ad829e28ee0eaef29b\` ON \`CategoryProduct\``);
        await queryRunner.query(`DROP TABLE \`CategoryProduct\``);
        await queryRunner.query(`DROP INDEX \`IDX_36a07cc432789830e7fb7b58a8\` ON \`Products\``);
        await queryRunner.query(`DROP TABLE \`Products\``);
    }

}
