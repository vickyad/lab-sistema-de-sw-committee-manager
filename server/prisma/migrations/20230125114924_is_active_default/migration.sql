-- AlterTable
ALTER TABLE `committee` MODIFY `is_active` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `member` MODIFY `is_active` BOOLEAN NOT NULL DEFAULT true;
