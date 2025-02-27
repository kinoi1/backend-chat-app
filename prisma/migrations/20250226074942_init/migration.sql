/*
  Warnings:

  - Added the required column `imageBanner` to the `UT_User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageProfile` to the `UT_User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UT_User" ADD COLUMN     "imageBanner" TEXT NOT NULL,
ADD COLUMN     "imageProfile" TEXT NOT NULL;
