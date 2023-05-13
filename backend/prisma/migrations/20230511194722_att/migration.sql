-- AlterTable
ALTER TABLE `comentarios` MODIFY `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `equipamentos` MODIFY `data` DATETIME(3) NULL;
