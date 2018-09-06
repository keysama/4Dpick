/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : 4dpick

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-09-06 11:29:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `4dresult`
-- ----------------------------
DROP TABLE IF EXISTS `4dresult`;
CREATE TABLE `4dresult` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(32) NOT NULL,
  `date` varchar(32) NOT NULL,
  `drawNumber` varchar(32) NOT NULL,
  `firstPrize` varchar(4) NOT NULL,
  `secondPrize` varchar(4) NOT NULL,
  `thirdPrize` varchar(4) NOT NULL,
  `specials0` varchar(4) NOT NULL,
  `specials1` varchar(4) NOT NULL,
  `specials2` varchar(4) NOT NULL,
  `specials3` varchar(4) NOT NULL,
  `specials4` varchar(4) NOT NULL,
  `specials5` varchar(4) NOT NULL,
  `specials6` varchar(4) NOT NULL,
  `specials7` varchar(4) NOT NULL,
  `specials8` varchar(4) NOT NULL,
  `specials9` varchar(4) NOT NULL,
  `consolations0` varchar(4) NOT NULL,
  `consolations1` varchar(4) NOT NULL,
  `consolations2` varchar(4) NOT NULL,
  `consolations3` varchar(4) NOT NULL,
  `consolations4` varchar(4) NOT NULL,
  `consolations5` varchar(4) NOT NULL,
  `consolations6` varchar(4) NOT NULL,
  `consolations7` varchar(4) NOT NULL,
  `consolations8` varchar(4) NOT NULL,
  `consolations9` varchar(4) NOT NULL,
  `createTime` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of 4dresult
-- ----------------------------
INSERT INTO `4dresult` VALUES ('8', 'magnum', '5/9/2018', '064/18', '5278', '0672', '2363', '4545', '7004', '1222', '1185', '9215', '6294', '4123', '2570', '6557', '2730', '4011', '9879', '9261', '3977', '5502', '6614', '6364', '9260', '0312', '0844', '1536151180658');
INSERT INTO `4dresult` VALUES ('9', 'damacai', '5/9/2018', '4775/18', '5740', '3221', '2653', '1867', '3765', '3021', '5232', '1098', '9179', '1021', '1510', '5348', '8607', '4608', '3890', '2896', '3312', '3753', '6050', '2225', '8358', '5276', '3250', '1536151180690');
INSERT INTO `4dresult` VALUES ('10', 'toto', '5/9/2018', '4828/18', '4297', '7312', '1672', '8471', '7996', '4784', '1057', '6491', '3467', '5715', '9527', '0822', '5888', '7911', '3842', '1113', '8264', '4157', '8519', '3237', '5929', '6266', '2274', '1536151180710');
INSERT INTO `4dresult` VALUES ('11', 'sabah88', '5/9/2018', '2894/18', '8065', '2453', '6958', '2766', '2580', '6090', '4291', '8346', '3269', '5827', '6213', '2585', '8070', '1265', '1802', '6881', '7484', '6423', '0592', '1260', '2074', '1966', '4710', '1536151180772');
INSERT INTO `4dresult` VALUES ('12', 'sarawak', '5/9/2018', '3987/18', '1510', '3813', '2877', '0444', '0558', '2120', '9065', '1430', '1275', '5990', '3955', '0748', '5780', '4401', '4012', '7698', '7993', '9605', '5844', '2155', '7411', '3989', '3733', '1536151180803');
INSERT INTO `4dresult` VALUES ('13', 'sandakan', '5/9/2018', '121/18', '6974', '8296', '3359', '0027', '4982', '7503', '5724', '4880', '5115', '1811', '6532', '6745', '6688', '6150', '4127', '0477', '5565', '1764', '9249', '6719', '4371', '5327', '0839', '1536151180806');
INSERT INTO `4dresult` VALUES ('14', 'singapore', '5/9/2018', '4312', '3742', '0862', '2678', '6147', '1514', '0931', '8947', '2458', '6402', '8304', '4005', '1737', '9204', '3860', '8996', '2792', '9319', '8034', '9675', '1649', '9520', '8875', '3338', '1536151180810');

-- ----------------------------
-- Table structure for `bankaccounts`
-- ----------------------------
DROP TABLE IF EXISTS `bankaccounts`;
CREATE TABLE `bankaccounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `bankName` varchar(32) NOT NULL,
  `accountNumber` varchar(64) NOT NULL,
  `accountName` varchar(64) NOT NULL,
  `createTime` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `link_bankAccount_user` (`user`),
  CONSTRAINT `link_bankAccount_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of bankaccounts
-- ----------------------------
INSERT INTO `bankaccounts` VALUES ('1', '4', 'AMB', '2', '1', '1535995046033');
INSERT INTO `bankaccounts` VALUES ('2', '5', 'BIMB', '00', '00', '1535995518567');
INSERT INTO `bankaccounts` VALUES ('6', '1', 'tt', 'tt', 'tt', 'tt');
INSERT INTO `bankaccounts` VALUES ('7', '1', 'ttt', 'ttt', 'ttt', 'ttt');

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `date` varchar(32) NOT NULL,
  `createTime` varchar(32) NOT NULL,
  `state` tinyint(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `link_orders_user` (`user`),
  CONSTRAINT `link_orders_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('7', '5', '2018-9-8', '1536197160553', '0');
INSERT INTO `orders` VALUES ('8', '5', '2018-9-9', '1536197197649', '1');
INSERT INTO `orders` VALUES ('9', '5', '2018-9-8', '1536201335895', '0');
INSERT INTO `orders` VALUES ('11', '5', '2018-9-8', '1536201397853', '0');

-- ----------------------------
-- Table structure for `order_sheets`
-- ----------------------------
DROP TABLE IF EXISTS `order_sheets`;
CREATE TABLE `order_sheets` (
  `oid` int(11) NOT NULL,
  `number` varchar(4) NOT NULL,
  `perms` varchar(32) NOT NULL,
  `big` int(8) DEFAULT '0',
  `small` int(8) DEFAULT '0',
  `fourA` int(8) DEFAULT '0',
  `numbers` varchar(64) NOT NULL,
  `totle` int(8) NOT NULL,
  PRIMARY KEY (`oid`,`number`),
  CONSTRAINT `link_sheet_orderss` FOREIGN KEY (`oid`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order_sheets
-- ----------------------------
INSERT INTO `order_sheets` VALUES ('7', '1234', 'Straight', '1', '0', '0', 'magnum|damacai', '2');
INSERT INTO `order_sheets` VALUES ('7', '3412', 'BOX', '0', '2', '0', 'sarawak|sabah88', '96');
INSERT INTO `order_sheets` VALUES ('8', '1232', 'BOX', '21', '2', '0', 'magnum', '276');
INSERT INTO `order_sheets` VALUES ('8', '4312', 'Straight', '2', '0', '0', 'damacai', '2');
INSERT INTO `order_sheets` VALUES ('9', '1234', 'Straight', '2', '0', '3', 'magnum', '5');
INSERT INTO `order_sheets` VALUES ('9', '3124', 'Straight', '0', '3', '0', 'damacai', '3');
INSERT INTO `order_sheets` VALUES ('11', '1232', 'Straight', '12', '0', '0', 'damacai', '12');
INSERT INTO `order_sheets` VALUES ('11', '1233', 'Straight', '23', '0', '0', 'magnum', '23');

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vaa` varchar(255) NOT NULL,
  `caa` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(32) DEFAULT 'user',
  `username` varchar(32) NOT NULL,
  `email` varchar(32) NOT NULL,
  `phone` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `createTime` varchar(18) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1', '2', '2@3.a', '1', '3', '1535993549279');
INSERT INTO `user` VALUES ('2', '1', '33', '2@3.a', '1', '3', '1535993673271');
INSERT INTO `user` VALUES ('3', '1', '4', '2@3.a', '1', '3', '1535994798220');
INSERT INTO `user` VALUES ('4', '1', '6', '2@3.a', '1', '3', '1535995046029');
INSERT INTO `user` VALUES ('5', '测试用户', 'te', 'test@test.com', 'test', '0', '1535995518557');
