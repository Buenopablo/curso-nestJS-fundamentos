import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class migrate1781108734845 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'text',
          },
          {
            name: 'email',
            type: 'text',
            isUnique: true,
          },
          {
            name: 'password',
            type: 'text',
          },
          {
            name: 'birthAt',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'role',
            type: 'integer',
            default: 1,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
