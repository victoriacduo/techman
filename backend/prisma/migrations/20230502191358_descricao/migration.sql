-- CreateTable
CREATE TABLE `Perfis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `perfil` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `senha` VARCHAR(191) NOT NULL,
    `id_perfil` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Equipamentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `equipamento` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ativo` VARCHAR(191) NOT NULL,
    `data` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comentarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comentario` VARCHAR(191) NOT NULL,
    `id_equipamentos` INTEGER NOT NULL,
    `id_perfil` INTEGER NOT NULL,
    `data` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuarios` ADD CONSTRAINT `Usuarios_id_perfil_fkey` FOREIGN KEY (`id_perfil`) REFERENCES `Perfis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_equipamentos_fkey` FOREIGN KEY (`id_equipamentos`) REFERENCES `Equipamentos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comentarios` ADD CONSTRAINT `Comentarios_id_perfil_fkey` FOREIGN KEY (`id_perfil`) REFERENCES `Perfis`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
