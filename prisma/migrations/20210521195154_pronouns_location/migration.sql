-- AlterTable
ALTER TABLE "User" ADD COLUMN     "location" TEXT NOT NULL DEFAULT E'',
ADD COLUMN     "pronouns" TEXT[];
