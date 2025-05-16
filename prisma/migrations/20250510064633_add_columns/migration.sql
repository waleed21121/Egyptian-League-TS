/*
  Warnings:

  - You are about to drop the column `name` on the `Player` table. All the data in the column will be lost.
  - Added the required column `dateOfBirth` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jerseyNumber` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `foundationYear` to the `Team` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stadiumName` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TeamStatus" AS ENUM ('ACTIVE', 'SUSPENDED');

-- CreateEnum
CREATE TYPE "PlayerPosition" AS ENUM ('GK', 'CB', 'RB', 'LB', 'CM', 'CDM', 'CAM', 'CF', 'LW', 'RW');

-- AlterTable
ALTER TABLE "Player" DROP COLUMN "name",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "jerseyNumber" INTEGER NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL DEFAULT 'USA',
ADD COLUMN     "position" "PlayerPosition" NOT NULL DEFAULT 'GK',
ALTER COLUMN "salary" SET DEFAULT 100000;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "foundationYear" INTEGER NOT NULL,
ADD COLUMN     "stadiumName" TEXT NOT NULL,
ADD COLUMN     "status" "TeamStatus" NOT NULL DEFAULT 'ACTIVE';
