-- CreateTable
CREATE TABLE `Member` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL,

    UNIQUE INDEX `Member_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Committee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bond` VARCHAR(191) NOT NULL,
    `begin_date` DATETIME(3) NULL,
    `end_date` DATETIME(3) NULL,
    `term` INTEGER NULL,
    `ordinance` VARCHAR(191) NULL,
    `observations` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MembersOnCommittees` (
    `member_id` INTEGER NOT NULL,
    `committee_id` INTEGER NOT NULL,
    `role` VARCHAR(191) NULL DEFAULT 'Membro',
    `assigned_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `begin_date` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `term` INTEGER NULL,
    `observations` VARCHAR(191) NULL,

    PRIMARY KEY (`member_id`, `committee_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MembersOnCommittees` ADD CONSTRAINT `MembersOnCommittees_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `Member`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MembersOnCommittees` ADD CONSTRAINT `MembersOnCommittees_committee_id_fkey` FOREIGN KEY (`committee_id`) REFERENCES `Committee`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
