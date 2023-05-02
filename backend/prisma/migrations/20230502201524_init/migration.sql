/*
  Warnings:

  - You are about to alter the column `ativo` on the `equipamentos` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `equipamentos` MODIFY `ativo` BOOLEAN NOT NULL;
