/*
  Warnings:

  - You are about to drop the column `email` on the `member` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Member_email_key` ON `member`;

-- AlterTable
ALTER TABLE `member` DROP COLUMN `email`;
