/*
  Warnings:

  - You are about to drop the column `Age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Gender` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `Sexuality` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "Age",
DROP COLUMN "Gender",
DROP COLUMN "Sexuality",
ADD COLUMN     "age" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "gender" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "sexuality" TEXT NOT NULL DEFAULT E'';
