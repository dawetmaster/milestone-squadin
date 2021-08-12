-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema squad_in_test
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema squad_in_test
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `squad_in_test` DEFAULT CHARACTER SET utf8 ;
USE `squad_in_test` ;

-- -----------------------------------------------------
-- Table `squad_in_test`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `squad_in_test`.`user` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `password` CHAR(40) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `profile_picture` LONGBLOB NULL,
  `faculty` VARCHAR(45) NOT NULL,
  `interest` VARCHAR(255) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `linkedin` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `linkedin_UNIQUE` (`linkedin` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `squad_in_test`.`group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `squad_in_test`.`group` (
  `group_id` INT NOT NULL AUTO_INCREMENT,
  `group_title` VARCHAR(45) NOT NULL,
  `group_interest` VARCHAR(45) NOT NULL,
  `group_desc` VARCHAR(255) NOT NULL,
  `group_capacity` INT NOT NULL,
  `group_circle_link` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`group_id`),
  UNIQUE INDEX `content_title_UNIQUE` (`group_title` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `squad_in_test`.`group_member`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `squad_in_test`.`group_member` (
  `group_group_id` INT NOT NULL,
  `id_user_host` INT NOT NULL,
  `id_user_member` INT NOT NULL,
  PRIMARY KEY (`group_group_id`, `id_user_host`, `id_user_member`),
  INDEX `fk_content_member_user2_idx` (`id_user_host` ASC) VISIBLE,
  INDEX `fk_group_member_group1_idx` (`group_group_id` ASC) VISIBLE,
  CONSTRAINT `fk_content_member_user1`
    FOREIGN KEY (`id_user_member`)
    REFERENCES `squad_in_test`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_content_member_user2`
    FOREIGN KEY (`id_user_host`)
    REFERENCES `squad_in_test`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_group_member_group1`
    FOREIGN KEY (`group_group_id`)
    REFERENCES `squad_in_test`.`group` (`group_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `squad_in_test`.`user_has_group`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `squad_in_test`.`user_has_group` (
  `id_user` INT NOT NULL,
  `group_id` INT NOT NULL,
  PRIMARY KEY (`id_user`, `group_id`),
  INDEX `fk_user_has_content_content1_idx` (`group_id` ASC) VISIBLE,
  INDEX `fk_user_has_content_user_idx` (`id_user` ASC) VISIBLE,
  CONSTRAINT `fk_user_has_content_user`
    FOREIGN KEY (`id_user`)
    REFERENCES `squad_in_test`.`user` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_content_content1`
    FOREIGN KEY (`group_id`)
    REFERENCES `squad_in_test`.`group` (`group_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
