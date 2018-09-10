/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : 4dpick

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2018-09-11 04:00:19
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

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
INSERT INTO `4dresult` VALUES ('15', 'magnum', '8/9/2018', '065/18', '5442', '2057', '8817', '9055', '2305', '5505', '6515', '8986', '0504', '6619', '9047', '9909', '2653', '5085', '5647', '1606', '1987', '1210', '0478', '2542', '2793', '7963', '6251', '1536411660812');
INSERT INTO `4dresult` VALUES ('16', 'damacai', '8/9/2018', '4776/18', '5447', '3271', '4348', '1711', '3503', '2548', '5112', '8358', '8566', '8934', '4360', '5278', '6960', '3091', '5378', '3938', '9602', '0248', '6250', '7288', '6278', '4589', '9572', '1536411661875');
INSERT INTO `4dresult` VALUES ('17', 'toto', '8/9/2018', '4829/18', '1209', '0505', '2135', '2589', '9595', '5668', '5042', '9620', '5796', '4319', '6992', '8437', '2814', '0338', '4400', '5003', '4049', '0178', '2711', '7932', '3286', '2183', '7233', '1536411663389');
INSERT INTO `4dresult` VALUES ('18', 'sabah88', '8/9/2018', '2895/18', '0572', '2304', '7024', '6944', '3548', '0785', '3401', '8258', '9931', '1439', '3297', '8185', '5116', '5303', '2933', '8887', '5351', '4600', '1947', '0190', '9423', '7539', '1045', '1536411668739');
INSERT INTO `4dresult` VALUES ('19', 'sarawak', '8/9/2018', '3988/18', '1737', '5771', '3758', '6223', '9422', '9490', '2748', '0128', '8889', '5336', '3228', '6560', '2938', '5546', '7625', '4489', '5514', '7724', '0088', '4480', '0587', '4232', '9874', '1536411669664');
INSERT INTO `4dresult` VALUES ('20', 'sandakan', '8/9/2018', '122/18', '8439', '6078', '9771', '0990', '4455', '7974', '1904', '0292', '9628', '8033', '1853', '2881', '8677', '8258', '2373', '9813', '4600', '4231', '9846', '8198', '7888', '6665', '4951', '1536411670729');
INSERT INTO `4dresult` VALUES ('21', 'singapore', '8/9/2018', '4313', '8421', '6495', '6274', '9125', '9457', '1482', '9486', '6347', '7179', '5981', '2968', '6062', '5329', '1410', '3413', '4593', '5238', '3870', '1788', '8677', '0315', '1005', '3859', '1536411671795');

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nickname` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `createTime` varchar(16) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', '测试admin', 'admin', 'admin', '2018.9.10');

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
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) NOT NULL,
  `creater` varchar(32) NOT NULL DEFAULT 'tourist',
  `user` int(11) DEFAULT NULL,
  `createTime` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('1', '555', '测试用户', '5', '1536607549390');
INSERT INTO `comment` VALUES ('2', '123', 'tourist', null, '1536607693972');
INSERT INTO `comment` VALUES ('3', '666', 'tourist', null, '1536607773920');
INSERT INTO `comment` VALUES ('4', '777', 'tourist', null, '1536608379183');
INSERT INTO `comment` VALUES ('5', '8888', 'tourist', null, '1536608381728');
INSERT INTO `comment` VALUES ('6', '1123', 'tourist', null, '1536608383463');
INSERT INTO `comment` VALUES ('7', '431141', 'tourist', null, '1536608385279');
INSERT INTO `comment` VALUES ('8', '3214', 'tourist', null, '1536608436181');
INSERT INTO `comment` VALUES ('9', '213', 'tourist', null, '1536608439486');
INSERT INTO `comment` VALUES ('10', '73大啊的', 'tourist', null, '1536608789970');
INSERT INTO `comment` VALUES ('11', 'adwadaw', 'tourist', null, '1536608817965');
INSERT INTO `comment` VALUES ('12', 'qwe', '测试用户', '5', '1536609134421');

-- ----------------------------
-- Table structure for `config`
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `value` varchar(64) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('1', 'reward', '10');
INSERT INTO `config` VALUES ('2', 'timelimit', '7-18-0');

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
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('7', '5', '2018-9-8', '1536197160553', '0');
INSERT INTO `orders` VALUES ('8', '5', '2018-9-9', '1536197197649', '1');
INSERT INTO `orders` VALUES ('9', '5', '2018-9-8', '1536201335895', '0');
INSERT INTO `orders` VALUES ('11', '5', '2018-9-8', '1536201397853', '1');
INSERT INTO `orders` VALUES ('12', '5', '2018-9-9', '1536407642337', '1');
INSERT INTO `orders` VALUES ('13', '5', '2018-9-12', '1536428106440', '1');
INSERT INTO `orders` VALUES ('14', '5', '2018-9-12', '1536428306665', '1');
INSERT INTO `orders` VALUES ('15', '5', '2018-9-12', '1536433655158', '0');
INSERT INTO `orders` VALUES ('18', '5', '2018-9-12', '1536433796554', '0');
INSERT INTO `orders` VALUES ('19', '5', '2018-9-12', '1536433876306', '0');

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
INSERT INTO `order_sheets` VALUES ('12', '1234', 'Straight', '1', '2', '0', 'magnum|damacai', '6');
INSERT INTO `order_sheets` VALUES ('13', '1234', 'BOX', '1', '2', '3', 'magnum|damacai', '288');
INSERT INTO `order_sheets` VALUES ('14', '1324', 'Straight', '12', '22', '2', 'magnum', '36');
INSERT INTO `order_sheets` VALUES ('15', '1234', 'BOX', '123', '21', '1', 'magnum', '3480');
INSERT INTO `order_sheets` VALUES ('18', '1233', 'BOX', '2', '0', '0', 'magnum|damacai|sabah88', '72');
INSERT INTO `order_sheets` VALUES ('18', '1234', 'BOX', '3', '2', '2', 'damacai|sabah88|sarawak|singapore|sandakan', '840');
INSERT INTO `order_sheets` VALUES ('19', '1233', 'Straight', '11', '3', '2', 'magnum|damacai|sabah88|sarawak|singapore|sandakan|toto', '112');
INSERT INTO `order_sheets` VALUES ('19', '1234', 'BOX', '2', '2', '2', 'magnum|damacai|sabah88|sarawak|singapore|sandakan', '864');

-- ----------------------------
-- Table structure for `specialdate`
-- ----------------------------
DROP TABLE IF EXISTS `specialdate`;
CREATE TABLE `specialdate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(16) NOT NULL,
  `remark` varchar(64) NOT NULL,
  `createTime` varchar(32) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of specialdate
-- ----------------------------
INSERT INTO `specialdate` VALUES ('2', '2018-9-10', '测试', '1536522969342');
INSERT INTO `specialdate` VALUES ('4', '2018-9-9', '2018-9-9', '1536530028123');

-- ----------------------------
-- Table structure for `test`
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vaa` varchar(255) NOT NULL,
  `caa` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of test
-- ----------------------------

-- ----------------------------
-- Table structure for `topup`
-- ----------------------------
DROP TABLE IF EXISTS `topup`;
CREATE TABLE `topup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `date` varchar(64) NOT NULL,
  `amount` varchar(32) NOT NULL,
  `state` tinyint(2) NOT NULL,
  `createTime` varchar(32) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `link_topUp_user` (`user`),
  CONSTRAINT `link_topUp_user` FOREIGN KEY (`user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of topup
-- ----------------------------
INSERT INTO `topup` VALUES ('6', '5', '2018-09-08 9:45:19PM', '50.00', '0', '1536414321345');
INSERT INTO `topup` VALUES ('7', '5', '2018-09-08 9:45:40PM', '50.00', '1', '1536414342303');
INSERT INTO `topup` VALUES ('15', '5', '2018-09-09 00:07:31AM', '20.00', '0', '1536422853630');
INSERT INTO `topup` VALUES ('16', '5', '2018-09-09 00:07:37AM', '20.00', '1', '1536422859548');
INSERT INTO `topup` VALUES ('17', '5', '2018-09-09 00:25:03AM', '20.00', '0', '1536423905542');
INSERT INTO `topup` VALUES ('18', '5', '2018-09-09 00:25:09AM', '20.00', '0', '1536423911680');
INSERT INTO `topup` VALUES ('19', '5', '2018-09-09 00:28:30AM', '20.00', '0', '1536424112346');
INSERT INTO `topup` VALUES ('20', '5', '2018-09-09 00:29:53AM', '20.00', '0', '1536424195611');
INSERT INTO `topup` VALUES ('21', '5', '2018-09-09 00:29:57AM', '20.00', '0', '1536424199412');
INSERT INTO `topup` VALUES ('22', '5', '2018-09-09 00:30:01AM', '20.00', '0', '1536424203146');
INSERT INTO `topup` VALUES ('23', '5', '2018-09-09 00:31:37AM', '20.00', '0', '1536424299687');
INSERT INTO `topup` VALUES ('24', '5', '2018-09-09 00:31:41AM', '20.00', '0', '1536424303170');
INSERT INTO `topup` VALUES ('25', '5', '2018-09-09 00:31:45AM', '20.00', '0', '1536424307297');
INSERT INTO `topup` VALUES ('26', '5', '2018-09-09 00:31:48AM', '40.00', '0', '1536424310334');
INSERT INTO `topup` VALUES ('27', '5', '2018-09-09 00:37:52AM', '20.00', '1', '1536424674534');
INSERT INTO `topup` VALUES ('28', '5', '2018-09-09 00:39:47AM', '20.00', '1', '1536424789741');
INSERT INTO `topup` VALUES ('29', '5', '2018-09-09 00:41:39AM', '20.00', '1', '1536424901455');
INSERT INTO `topup` VALUES ('30', '5', '2018-09-09 00:42:30AM', '20.00', '1', '1536424952972');
INSERT INTO `topup` VALUES ('31', '5', '2018-09-09 00:46:05AM', '20.00', '1', '1536425167516');
INSERT INTO `topup` VALUES ('32', '5', '2018-09-09 00:50:04AM', '20.00', '1', '1536425406520');
INSERT INTO `topup` VALUES ('33', '5', '2018-09-09 00:51:30AM', '20.00', '1', '1536425492232');
INSERT INTO `topup` VALUES ('34', '5', '2018-09-09 00:53:31AM', '20.00', '1', '1536425613287');
INSERT INTO `topup` VALUES ('35', '5', '2018-09-09 00:54:13AM', '20.00', '1', '1536425655413');
INSERT INTO `topup` VALUES ('36', '5', '2018-09-09 01:31:16AM', '20.00', '0', '1536427876471');
INSERT INTO `topup` VALUES ('37', '5', '2018-09-09 04:33:27AM', '40.00', '0', '1536438807282');

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
  `amount` varchar(8) NOT NULL DEFAULT '0',
  `first` tinyint(2) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1', '2', '2@3.a', '1', '3', '1535993549279', '', '1');
INSERT INTO `user` VALUES ('2', '1', '33', '2@3.a', '1', '3', '1535993673271', '', '1');
INSERT INTO `user` VALUES ('3', '1', '4', '2@3.a', '1', '3', '1535994798220', '', '1');
INSERT INTO `user` VALUES ('4', '1', '6', '2@3.a', '1', '3', '1535995046029', '', '1');
INSERT INTO `user` VALUES ('5', '测试用户', 'te', 'test@test.com', 'test', '0', '1535995518557', '958', '1');
INSERT INTO `user` VALUES ('6', 'user', '', '', '', '', '', '2', '1');
