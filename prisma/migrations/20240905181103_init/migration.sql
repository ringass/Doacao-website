-- CreateTable
CREATE TABLE `Donation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `rg` VARCHAR(191) NOT NULL,
    `clothingType` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `condition` VARCHAR(191) NOT NULL,
    `size` VARCHAR(191) NOT NULL,
    `donationDate` DATETIME(3) NOT NULL,
    `comments` VARCHAR(191) NULL,
    `contactPref` VARCHAR(191) NULL,
    `consentCommunication` BOOLEAN NOT NULL,
    `consentDataSharing` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
