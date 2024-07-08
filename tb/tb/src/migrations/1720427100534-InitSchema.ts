import { MigrationInterface, QueryRunner } from 'typeorm';

const tables = [
  `CREATE TABLE "user" (
        "id" uuid NOT NULL,
        "keycloakId" uuid,
        "firstName" character varying NOT NULL  DEFAULT '',
        "displayName" character varying NOT NULL  DEFAULT '',
        "lastName" character varying NOT NULL  DEFAULT '',
        "email" character varying NOT NULL,
        "title" character varying,
        "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedOn" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_00654892988ad0eb3802a32d731" PRIMARY KEY ("id")
    )`,
  `CREATE TABLE "support_email_integration" (
        "id" uuid NOT NULL,
        "userId"  uuid NOT NULL,
        "displayName" character varying NOT NULL DEFAULT '',
        "supportEmail" character varying NOT NULL,
        "companyName" character varying NOT NULL DEFAULT '',
        "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedOn" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_7ec7f6581285148e265d3415327" PRIMARY KEY ("id")
    )`,
  `CREATE TABLE "ticket" (
        "id" uuid NOT NULL,
        "name" character varying NOT NULL,
        "description" character varying NOT NULL DEFAULT '',
        "status" character varying NOT NULL,
        "tags" jsonb,
        "currentThreadOrderSeq" int NOT NULL DEFAULT '0',
        "isDeleted" boolean NOT NULL DEFAULT false,
        "userId"  uuid NOT NULL,
        "supportEmailId"  uuid NOT NULL,
        "projectId"  uuid NOT NULL,
        "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedOn" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_d3967ff52863c52e3f9cbeab9d2" PRIMARY KEY ("id")
    )`,
  `CREATE TABLE "thread" (
        "id" uuid NOT NULL,
        "content" character varying NOT NULL DEFAULT '',
        "fromEmail" character varying NOT NULL,
        "toEmail" character varying NOT NULL,
        "orderSeq" int NOT NULL DEFAULT '0',
        "isEdited" boolean NOT NULL DEFAULT false,
        "isBelongToMLAgent" boolean NOT NULL DEFAULT false,
        "isDeleted" boolean NOT NULL DEFAULT false,
        "ticketId"  uuid NOT NULL,
        "projectId"  uuid NOT NULL,
        "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedOn" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_a96b1585e3fe1a35bce82bf12f0" PRIMARY KEY ("id")
    )`,
  `CREATE TABLE "thread_file" (
        "id" uuid NOT NULL,
        "threadId" uuid NOT NULL,
        "url" character varying NOT NULL,
        "fileName" character varying NOT NULL DEFAULT '',
        "fileType" character varying NOT NULL DEFAULT '',
        "isDeleted" boolean NOT NULL DEFAULT false,
        "createdOn" TIMESTAMP NOT NULL DEFAULT now(),
        "updatedOn" TIMESTAMP NOT NULL DEFAULT now(),
        CONSTRAINT "PK_12686a5abfd6fa7e7fbbe1fb39a" PRIMARY KEY ("id")
    )`,
];

export class InitSchema1720427100534 implements MigrationInterface {
  name = 'InitSchema1720427100534';
  public async up(queryRunner: QueryRunner): Promise<void> {
    tables.forEach(async (query) => {
      await queryRunner.query(query);
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "support_email_integration"`);
    await queryRunner.query(`DROP TABLE "ticket"`);
    await queryRunner.query(`DROP TABLE "thread"`);
    await queryRunner.query(`DROP TABLE "thread_file"`);
  }
}
