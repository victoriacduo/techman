/*
  Warnings:

  - Made the column `data` on table `equipamentos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `equipamentos` MODIFY `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
