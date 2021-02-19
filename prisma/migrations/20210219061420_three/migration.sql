/*
  Warnings:

  - You are about to drop the `Accounts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Accounts" DROP CONSTRAINT "Accounts_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "accounts" JSONB[];

-- DropTable
DROP TABLE "Accounts";
