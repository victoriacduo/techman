-- DropForeignKey
ALTER TABLE `comentarios` DROP FOREIGN KEY `Comentarios_id_equipamentos_fkey`;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_equipamentos_fkey` FOREIGN KEY (`id_equipamentos`) REFERENCES `Equipamentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
