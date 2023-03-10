-- CreateTable
CREATE TABLE `RoleTemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` VARCHAR(191) NOT NULL,
    `committeeTemplateId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CommitteeTemplate` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bond` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoleTemplate` ADD CONSTRAINT `RoleTemplate_committeeTemplateId_fkey` FOREIGN KEY (`committeeTemplateId`) REFERENCES `CommitteeTemplate`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
