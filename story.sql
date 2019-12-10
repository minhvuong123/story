/*
Navicat MySQL Data Transfer

Source Server         : database
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : story

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2019-12-10 18:41:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for categories
-- ----------------------------
DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slugName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of categories
-- ----------------------------
INSERT INTO `categories` VALUES ('1', 'Tiên Hiệp', 'tien-hiep', '2019-12-06 06:08:50', '2019-12-06 06:08:50');
INSERT INTO `categories` VALUES ('2', 'Kiếm Hiệp', 'kiem-hiep', '2019-12-06 06:09:08', '2019-12-06 06:09:08');
INSERT INTO `categories` VALUES ('3', 'Đô Thị', 'do-thi', '2019-12-06 06:09:17', '2019-12-06 06:09:17');
INSERT INTO `categories` VALUES ('4', 'Huyền Ảo', 'huyen-ao', '2019-12-06 06:09:26', '2019-12-06 06:09:26');
INSERT INTO `categories` VALUES ('5', 'Ngôn Tình', 'ngon-tin', '2019-12-06 06:09:37', '2019-12-06 06:09:37');
INSERT INTO `categories` VALUES ('6', 'Dị Năng', 'di-nang', '2019-12-06 06:09:47', '2019-12-06 06:09:47');
INSERT INTO `categories` VALUES ('7', 'Võng Du', 'vong-du', '2019-12-06 06:09:58', '2019-12-06 06:09:58');
INSERT INTO `categories` VALUES ('8', 'Dị Giới', 'di-gioi', '2019-12-06 06:10:08', '2019-12-06 06:10:08');
INSERT INTO `categories` VALUES ('9', 'Khoa Huyễn', 'khoa-huyen', '2019-12-06 06:10:15', '2019-12-06 06:10:15');
INSERT INTO `categories` VALUES ('10', 'Quân Sự', 'quan-su', '2019-12-06 06:10:23', '2019-12-06 06:10:23');
INSERT INTO `categories` VALUES ('11', 'Lịch Sử', 'lich-su', '2019-12-06 06:10:32', '2019-12-06 06:10:32');
INSERT INTO `categories` VALUES ('12', 'Xuyên Không', 'xuyen-khong', '2019-12-06 06:10:42', '2019-12-06 06:10:42');
INSERT INTO `categories` VALUES ('13', 'Sắc', 'sac', '2019-12-06 06:10:53', '2019-12-06 06:10:53');
INSERT INTO `categories` VALUES ('14', 'Truyện Teen', 'truyen-teen', '2019-12-06 06:11:00', '2019-12-06 06:11:00');
INSERT INTO `categories` VALUES ('15', 'Kinh Dị', 'kinh-di', '2019-12-06 06:11:09', '2019-12-06 06:11:09');
INSERT INTO `categories` VALUES ('16', 'Truyện Ma', 'truyen-ma', '2019-12-06 06:11:18', '2019-12-06 06:11:18');
INSERT INTO `categories` VALUES ('17', 'Hài Hước', 'hai-huoc', '2019-12-06 06:11:30', '2019-12-06 06:11:30');
INSERT INTO `categories` VALUES ('18', 'Trọng Sinh', 'trong-sinh', '2019-12-06 06:11:38', '2019-12-06 06:11:38');
INSERT INTO `categories` VALUES ('19', 'Mạt Thế', 'mat-the', '2019-12-06 06:11:48', '2019-12-06 06:11:48');
INSERT INTO `categories` VALUES ('20', 'Đồng Nhân', 'dong-nhan', '2019-12-06 06:11:55', '2019-12-06 06:11:55');
INSERT INTO `categories` VALUES ('21', 'Cạnh Kỹ', 'canh-ky', '2019-12-06 06:12:03', '2019-12-06 06:12:03');
INSERT INTO `categories` VALUES ('22', 'Nữ Hiệp', 'nu-hiep', '2019-12-06 06:12:18', '2019-12-06 06:12:18');
INSERT INTO `categories` VALUES ('23', 'Trinh Thám', 'trinh-tham', '2019-12-06 06:12:26', '2019-12-06 06:12:26');
INSERT INTO `categories` VALUES ('24', 'Nữ Cường', 'nu-cuong', '2019-12-06 06:12:35', '2019-12-06 06:12:35');
INSERT INTO `categories` VALUES ('25', 'Đam Mỹ', 'dam-my', '2019-12-06 06:12:43', '2019-12-06 06:12:43');
INSERT INTO `categories` VALUES ('26', 'Truyện Cổ Tích', 'truyen-co-tich', '2019-12-06 06:12:51', '2019-12-06 06:12:51');
INSERT INTO `categories` VALUES ('27', 'Truyện Tình Cảm', 'truyen-tinh-cam', '2019-12-06 06:13:02', '2019-12-06 06:13:02');
INSERT INTO `categories` VALUES ('28', 'Hiện Đại', 'hien-dai', '2019-12-06 06:13:10', '2019-12-06 06:13:10');
INSERT INTO `categories` VALUES ('29', 'Cổ Đại', 'co-dai', '2019-12-06 06:13:20', '2019-12-06 06:13:20');
INSERT INTO `categories` VALUES ('30', 'Người Đọc', 'nguoi-doc', '2019-12-06 06:13:27', '2019-12-06 06:13:27');
INSERT INTO `categories` VALUES ('31', 'Truyện Ngắn', 'truyen-ngan', '2019-12-06 06:13:37', '2019-12-06 06:13:37');
INSERT INTO `categories` VALUES ('32', 'Hạt Giống Tâm Hồn', 'hat-giong-tam-hon', '2019-12-06 06:13:46', '2019-12-06 06:13:46');
INSERT INTO `categories` VALUES ('33', 'Điền Văn', 'dien-van', '2019-12-06 06:13:57', '2019-12-06 06:13:57');
INSERT INTO `categories` VALUES ('34', 'Hồi Ký', 'hoi-ky', '2019-12-06 06:14:08', '2019-12-06 06:14:08');
INSERT INTO `categories` VALUES ('35', 'Tâm Sự', 'tam-su', '2019-12-06 06:14:17', '2019-12-06 06:14:17');
INSERT INTO `categories` VALUES ('36', 'Phiêu Lưu', 'phieu-luu', '2019-12-06 06:14:26', '2019-12-06 06:14:26');
INSERT INTO `categories` VALUES ('37', 'Bách Hợp', 'bach-hop', '2019-12-06 06:14:34', '2019-12-06 06:14:34');
INSERT INTO `categories` VALUES ('38', 'Light Novel', 'light-novel', '2019-12-06 06:14:43', '2019-12-06 06:14:43');

-- ----------------------------
-- Table structure for chapters
-- ----------------------------
DROP TABLE IF EXISTS `chapters`;
CREATE TABLE `chapters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `storyID` int(11) DEFAULT NULL,
  `chapterNumber` int(11) DEFAULT NULL,
  `audio` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `timeDuration` double(11,0) DEFAULT NULL,
  `status` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=408 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of chapters
-- ----------------------------
INSERT INTO `chapters` VALUES ('1', '', '1', '1', 'public/uploads/audios/Linh-vu-thien-ha-1.mp3', null, null, '2019-12-07 03:54:43', '2019-12-07 03:54:43');
INSERT INTO `chapters` VALUES ('2', '', '1', '2', 'public/uploads/audios/Linh-vu-thien-ha-2.mp3', null, null, '2019-12-07 03:54:58', '2019-12-07 03:54:58');
INSERT INTO `chapters` VALUES ('3', '', '1', '3', 'public/uploads/audios/Linh-vu-thien-ha-3.mp3', null, null, '2019-12-07 03:55:24', '2019-12-07 03:55:24');
INSERT INTO `chapters` VALUES ('4', '', '1', '4', 'public/uploads/audios/Linh-vu-thien-ha-4.mp3', null, null, '2019-12-07 03:55:29', '2019-12-07 03:55:29');
INSERT INTO `chapters` VALUES ('5', '', '1', '5', 'public/uploads/audios/Linh-vu-thien-ha-5.mp3', null, null, '2019-12-07 03:55:33', '2019-12-07 03:55:33');
INSERT INTO `chapters` VALUES ('6', '', '1', '6', 'public/uploads/audios/Linh-vu-thien-ha-6.mp3', null, null, '2019-12-07 03:55:38', '2019-12-07 03:55:38');
INSERT INTO `chapters` VALUES ('7', '', '1', '7', 'public/uploads/audios/Linh-vu-thien-ha-7.mp3', null, null, '2019-12-07 03:55:43', '2019-12-07 03:55:43');
INSERT INTO `chapters` VALUES ('8', '', '1', '8', 'public/uploads/audios/Linh-vu-thien-ha-8.mp3', null, null, '2019-12-07 03:55:47', '2019-12-07 03:55:47');
INSERT INTO `chapters` VALUES ('9', '', '1', '9', 'public/uploads/audios/Linh-vu-thien-ha-9.mp3', null, null, '2019-12-07 03:55:53', '2019-12-07 03:55:53');
INSERT INTO `chapters` VALUES ('10', '', '1', '10', 'public/uploads/audios/Linh-vu-thien-ha-10.mp3', null, null, '2019-12-07 03:55:58', '2019-12-07 03:55:58');
INSERT INTO `chapters` VALUES ('11', '', '1', '11', 'public/uploads/audios/Linh-vu-thien-ha-11.mp3', null, null, '2019-12-07 03:56:10', '2019-12-07 03:56:10');
INSERT INTO `chapters` VALUES ('12', '', '1', '12', 'public/uploads/audios/Linh-vu-thien-ha-12.mp3', null, null, '2019-12-07 03:56:18', '2019-12-07 03:56:18');
INSERT INTO `chapters` VALUES ('13', '', '1', '13', 'public/uploads/audios/Linh-vu-thien-ha-13.mp3', null, null, '2019-12-07 03:56:23', '2019-12-07 03:56:23');
INSERT INTO `chapters` VALUES ('14', '', '1', '14', 'public/uploads/audios/Linh-vu-thien-ha-14.mp3', null, null, '2019-12-07 03:56:27', '2019-12-07 03:56:27');
INSERT INTO `chapters` VALUES ('15', '', '1', '15', 'public/uploads/audios/Linh-vu-thien-ha-15.mp3', null, 'new', '2019-12-07 03:56:33', '2019-12-07 03:56:33');
INSERT INTO `chapters` VALUES ('16', 'Gã quét rác sai vặt', '2', '1', 'public/uploads/audios/vu-luyen-dien-phong-Chương-0001-Gã-quét-rác-sai-vặt.mp3', null, null, '2019-12-07 10:10:21', '2019-12-07 10:10:21');
INSERT INTO `chapters` VALUES ('17', 'Đánh vỡ nam tường không quay đầu', '2', '2', 'public/uploads/audios/vu-luyen-dien-phong-Chương-0002-Đánh-vỡ-nam-tường-không-quay-đầu-lại.mp3', null, null, '2019-12-07 10:10:57', '2019-12-07 10:10:57');
INSERT INTO `chapters` VALUES ('18', 'Liên tiếp bị đánh bại 147 tràng nam nhân', '2', '3', 'public/uploads/audios/vu-luyen-dien-phong-Chương-0003-Liên-tiếp-bị-đánh-bại-147-tràng-nam-nhân.mp3', null, null, '2019-12-07 10:11:19', '2019-12-07 10:11:19');
INSERT INTO `chapters` VALUES ('19', 'Hắc thư', '2', '4', 'public/uploads/audios/vu-luyen-dien-phong-Chương-0004-Hắc-Thư.mp3', null, null, '2019-12-07 10:12:12', '2019-12-07 10:12:12');
INSERT INTO `chapters` VALUES ('20', 'Ngạo cốt kim thân', '2', '5', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0005-Ngạo-Cốt-Kim-Thân.mp3', null, null, '2019-12-07 10:12:45', '2019-12-07 10:12:45');
INSERT INTO `chapters` VALUES ('21', 'Bảo mã xứng tốt yên mỹ nữ tặng anh hùng', '2', '6', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0006-Bảo-mã-xứng-tốt-yên-mỹ-nữ-tặng-anh-hùng.mp3', null, null, '2019-12-07 10:12:54', '2019-12-07 10:12:54');
INSERT INTO `chapters` VALUES ('22', 'Tôi thế cảnh tầng bốn khí cảm sinh ra đời', '2', '7', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0007-Tôi-Thể-Cảnh-tầng-bốn-Khí-Cảm-sinh-ra-đời.mp3', null, null, '2019-12-07 10:13:05', '2019-12-07 10:13:05');
INSERT INTO `chapters` VALUES ('23', 'trước sau lồi lõm chân dài da trắng mặt xinh eo thon', '2', '8', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0008-Trước-sau-lồi-lõm-chân-dài-da-trắng-mặt-xinh-eo-thon.mp3', null, null, '2019-12-07 10:13:12', '2019-12-07 10:13:12');
INSERT INTO `chapters` VALUES ('24', 'Mộng chưởng quỹ', '2', '9', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0009-Mộng-chưởng-quỹ.mp3', null, null, '2019-12-07 10:13:26', '2019-12-07 10:13:26');
INSERT INTO `chapters` VALUES ('25', 'Rủi ro tiêu tai', '2', '10', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0010-Rủi-ro-tiêu-tai.mp3', null, null, '2019-12-07 10:13:35', '2019-12-07 10:13:35');
INSERT INTO `chapters` VALUES ('26', 'Người tốt làm đến cùng tiễn Phật đưa đến tây', '2', '11', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0011-Người-tốt-làm-đến-cùng-tiễn-Phật-đưa-đến-tây.mp3', null, null, '2019-12-07 10:13:44', '2019-12-07 10:13:44');
INSERT INTO `chapters` VALUES ('27', 'Quỷ kế', '2', '12', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0012-Quỷ-kế.mp3', null, null, '2019-12-07 10:13:54', '2019-12-07 10:13:54');
INSERT INTO `chapters` VALUES ('28', 'Người chờ ', '2', '13', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0013-Ngươi-chờ-Converter.mp3', null, null, '2019-12-07 10:14:04', '2019-12-07 10:14:04');
INSERT INTO `chapters` VALUES ('29', 'Lư hương', '2', '14', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0014-Lư-hương-Converter.mp3', null, null, '2019-12-07 10:14:12', '2019-12-07 10:14:12');
INSERT INTO `chapters` VALUES ('30', 'Lên núi tìm dược', '2', '15', 'public/uploads/audios/vu-luyen-dien-phong+Chương-0015-Lên-núi-tìm-dược-Converter.mp3', null, 'new', '2019-12-07 10:14:20', '2019-12-07 10:14:20');
INSERT INTO `chapters` VALUES ('31', 'Một ngày của Vân Đại 2', '19', '14', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-14-Một-ngày-của-Vân-Đại-2-r.mp3', null, 'new', '2019-12-07 10:15:21', '2019-12-07 10:15:21');
INSERT INTO `chapters` VALUES ('32', 'Một ngày của Vân Đại 1', '19', '13', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-13-Một-ngày-của-Vân-Đại-1-.mp3', null, null, '2019-12-07 10:15:34', '2019-12-07 10:15:34');
INSERT INTO `chapters` VALUES ('33', 'Mạnh miệng 2', '19', '12', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-12-Mạnh-miệng-2-.mp3', null, null, '2019-12-07 10:15:41', '2019-12-07 10:15:41');
INSERT INTO `chapters` VALUES ('34', 'Mạnh miệng 1', '19', '11', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-11-Mạnh-miệng-1-.mp3', null, null, '2019-12-07 10:15:54', '2019-12-07 10:15:54');
INSERT INTO `chapters` VALUES ('35', 'Quan sai bắt tráng đinh', '19', '10', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-10-Quan-sai-bắt-tráng-đinh-.mp3', null, null, '2019-12-07 10:16:09', '2019-12-07 10:16:09');
INSERT INTO `chapters` VALUES ('36', 'Cuộc sống ở Đậu Sa Trại', '19', '9', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-9-Cuộc-sống-ở-Đậu-Sa-trại-.mp3', null, null, '2019-12-07 10:16:16', '2019-12-07 10:16:16');
INSERT INTO `chapters` VALUES ('37', 'Cái mầm đọc sách', '19', '8', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-8-Cái-mầm-đọc-sách-.mp3', null, null, '2019-12-07 10:16:22', '2019-12-07 10:16:22');
INSERT INTO `chapters` VALUES ('38', 'Đậu sa quan', '19', '7', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-7-Đậu-Sa-quan-.mp3', null, null, '2019-12-07 10:16:29', '2019-12-07 10:16:29');
INSERT INTO `chapters` VALUES ('39', 'Cuộc sống là người thầy tốt nhất', '19', '6', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-6-Cuộc-sống-là-người-thầy-tốt-nhất-.mp3', null, null, '2019-12-07 10:16:35', '2019-12-07 10:16:35');
INSERT INTO `chapters` VALUES ('40', 'Trở về nhân gian', '19', '5', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-5-Trở-về-nhân-gian-.mp3', null, null, '2019-12-07 10:16:42', '2019-12-07 10:16:42');
INSERT INTO `chapters` VALUES ('41', 'Sinh tồn nơi hoang dã 3', '19', '4', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-4-Sinh-tồn-nơi-hoang-dã-3-.mp3', null, null, '2019-12-07 10:16:48', '2019-12-07 10:16:48');
INSERT INTO `chapters` VALUES ('42', 'Sinh tồn nơi hoang dã 2', '19', '3', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-3-Sinh-tồn-nơi-hoang-dã-2-.mp3', null, null, '2019-12-07 10:16:53', '2019-12-07 10:16:53');
INSERT INTO `chapters` VALUES ('43', 'Sinh tồn nơi hoang dã 1', '19', '2', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-2-Sinh-tồn-nơi-hoang-dã-1-.mp3', null, null, '2019-12-07 10:16:59', '2019-12-07 10:16:59');
INSERT INTO `chapters` VALUES ('44', 'Đẩy cửa một cái đã là ngày hôm qua', '19', '1', 'public/uploads/audios/tri-tue-dai-tong+Quyển-0001-Chương-1-Đẩy-cửa-một-cái-đã-là-ngày-hôm-qua-.mp3', null, '', '2019-12-07 10:17:07', '2019-12-07 10:17:07');
INSERT INTO `chapters` VALUES ('45', 'Nếu chổ đó cũng không lưu được ta 2', '22', '6', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0006-2-Nếu-chỗ-đó-cũng-không-lưu-được-ta-2.mp3', null, null, '2019-12-07 10:17:16', '2019-12-07 10:17:16');
INSERT INTO `chapters` VALUES ('46', 'Nếu chổ đó cũng không lưu được ta 1', '22', '6', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0006-1-Nếu-chỗ-đó-cũng-không-lưu-được-ta-1.mp3', null, null, '2019-12-07 10:17:22', '2019-12-07 10:17:22');
INSERT INTO `chapters` VALUES ('47', 'Thủ đoạn thật bá đạo', '22', '5', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0005-Thủ-đoạn-thật-bá-đạo.mp3', null, null, '2019-12-07 10:17:32', '2019-12-07 10:17:32');
INSERT INTO `chapters` VALUES ('48', 'Hắn ở nới nào', '22', '4', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0004-Hắn-ở-nơi-nào.mp3', null, null, '2019-12-07 10:17:40', '2019-12-07 10:17:40');
INSERT INTO `chapters` VALUES ('49', 'Quá nhiều việc không biết 2', '22', '3', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0003-2-Quá-nhiều-việc-không-biết-2.mp3', null, null, '2019-12-07 10:17:45', '2019-12-07 10:17:45');
INSERT INTO `chapters` VALUES ('50', 'Quá nhiều việc không biết 1', '22', '3', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0003-1-Quá-nhiều-việc-không-biết-1.mp3', null, null, '2019-12-07 10:17:55', '2019-12-07 10:17:55');
INSERT INTO `chapters` VALUES ('51', 'Thành quan cổ', '22', '2', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0002-Thành-phan-cố.mp3', null, null, '2019-12-07 10:18:00', '2019-12-07 10:18:00');
INSERT INTO `chapters` VALUES ('52', 'Người đặc biệt nhất biên thành', '22', '1', 'public/uploads/audios/tranh-ba-thien-ha+Chương-0001-Người-đặc-biệt-nhất-biên-thành.mp3', null, null, '2019-12-07 10:18:09', '2019-12-07 10:18:09');
INSERT INTO `chapters` VALUES ('53', 'Hai mươi lăm người 1', '22', '13', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0013-1-Hai-mươi-lăm-người-1.mp3', null, 'new', '2019-12-07 10:18:34', '2019-12-07 10:18:34');
INSERT INTO `chapters` VALUES ('54', 'Rất lớn rất lớn', '22', '12', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0012-Rất-lớn-rất-lớn.mp3', null, null, '2019-12-07 10:18:40', '2019-12-07 10:18:40');
INSERT INTO `chapters` VALUES ('55', 'Không vào được', '22', '11', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0011-Không-vào-được.mp3', null, null, '2019-12-07 10:18:47', '2019-12-07 10:18:47');
INSERT INTO `chapters` VALUES ('56', 'Không nên có phật', '22', '10', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0010-Không-nên-có-phật.mp3', null, null, '2019-12-07 10:18:53', '2019-12-07 10:18:53');
INSERT INTO `chapters` VALUES ('57', 'Vẫn là thôi vậy', '22', '9', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0009-Vẫn-là-thôi-vậy.mp3', null, null, '2019-12-07 10:18:59', '2019-12-07 10:18:59');
INSERT INTO `chapters` VALUES ('58', 'Nguy hiểm không biết tới', '22', '8', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0008-Nguy-hiểm-không-biết-tới.mp3', null, null, '2019-12-07 10:19:05', '2019-12-07 10:19:05');
INSERT INTO `chapters` VALUES ('59', 'Trường an chấp pháp sứ và giàn tế thảo nguyên', '22', '6', 'public/uploads/audios/tranh-ba-thien-ha-Chương-0007-Trường-an-chấp-pháp-sứ-và-gian-tế-thảo-nguyên.mp3', null, '', '2019-12-07 10:19:11', '2019-12-07 10:19:11');
INSERT INTO `chapters` VALUES ('60', 'Cùng ta nói chuyện tư cách Ngươi cũng xứng', '9', '15', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0015-cùng-ta-nói-chuyện-tư-cách-Ngươi-cũng-xứng.mp3', null, 'new', '2019-12-07 10:19:21', '2019-12-07 10:19:21');
INSERT INTO `chapters` VALUES ('61', 'Tu ma Hệ Thống', '9', '14', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0014-Tu-Ma-Hệ-Thống.mp3', null, null, '2019-12-07 10:19:31', '2019-12-07 10:19:31');
INSERT INTO `chapters` VALUES ('62', 'Đồ Long Cuồng Trảm', '9', '13', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0013-Đồ-Long-Cuồng-Trảm.mp3', null, null, '2019-12-07 10:19:38', '2019-12-07 10:19:38');
INSERT INTO `chapters` VALUES ('63', 'Đại sát đặc sát', '9', '12', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0012-Đại-sát-đặc-sát.mp3', null, null, '2019-12-07 10:19:43', '2019-12-07 10:19:43');
INSERT INTO `chapters` VALUES ('64', 'Coi trời bằng vung', '9', '11', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0011-Coi-trời-bằng-vung.mp3', null, null, '2019-12-07 10:19:49', '2019-12-07 10:19:49');
INSERT INTO `chapters` VALUES ('65', 'Lão tử trở về rồi', '9', '10', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0010-Lão-Tử-trở-về-rồi.mp3', null, null, '2019-12-07 10:19:54', '2019-12-07 10:19:54');
INSERT INTO `chapters` VALUES ('66', 'Sống không bằng lang', '9', '9', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0009-Sống-không-bằng-lang.mp3', null, null, '2019-12-07 10:20:02', '2019-12-07 10:20:02');
INSERT INTO `chapters` VALUES ('67', 'Tân thủ gói quà lớn', '9', '3', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0003-Tân-Thủ-gói-quà-lớn.mp3', null, null, '2019-12-07 10:20:08', '2019-12-07 10:20:08');
INSERT INTO `chapters` VALUES ('68', 'Thần kỹ cáp mô công', '9', '2', 'public/uploads/audios/toi-cuong-thang-cap-he-thong+Chương-0002-Thần-Kỹ-Cáp-Mô-công.mp3', null, '', '2019-12-07 10:20:14', '2019-12-07 10:20:14');
INSERT INTO `chapters` VALUES ('69', 'Cá chết lưới rách', '7', '8', 'public/uploads/audios/toan-chuc-cao-thu+Chương-0008-Cá-chết-lưới-rách.mp3', null, null, '2019-12-07 10:20:32', '2019-12-07 10:20:32');
INSERT INTO `chapters` VALUES ('70', 'Ám dạ miêu yêu', '7', '7', 'public/uploads/audios/toan-chuc-cao-thu+Chương-0007-Ám-Dạ-Miêu-Yêu.mp3', null, null, '2019-12-07 10:20:37', '2019-12-07 10:20:37');
INSERT INTO `chapters` VALUES ('71', 'Cao thủ thần bí', '7', '4', 'public/uploads/audios/toan-chuc-cao-thu+Chương-0004-Cao-thủ-thần-bí.mp3', null, null, '2019-12-07 10:20:43', '2019-12-07 10:20:43');
INSERT INTO `chapters` VALUES ('72', 'Huyến động nhện nhện 4', '7', '15', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0015-huyet-dong-nhen-nhen-4.mp3', null, 'new', '2019-12-07 10:21:30', '2019-12-07 10:21:30');
INSERT INTO `chapters` VALUES ('73', 'Huyến động nhện nhện 3', '7', '14', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0014-huyet-dong-nhen-nhen-3.mp3', null, null, '2019-12-07 10:21:48', '2019-12-07 10:21:48');
INSERT INTO `chapters` VALUES ('74', 'Huyến động nhện nhện 2', '7', '13', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0013-huyet-dong-nhen-nhen-2.mp3', null, null, '2019-12-07 10:21:54', '2019-12-07 10:21:54');
INSERT INTO `chapters` VALUES ('75', 'Huyến động nhện nhện 1', '7', '12', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0012-huyet-dong-nhen-nhen-1.mp3', null, null, '2019-12-07 10:22:01', '2019-12-07 10:22:01');
INSERT INTO `chapters` VALUES ('76', 'Thiếu người thì thêm tôi', '7', '11', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0011-thieu-nguoi-thi-them-tui.mp3', null, null, '2019-12-07 10:22:08', '2019-12-07 10:22:08');
INSERT INTO `chapters` VALUES ('77', 'Tên vô sĩ', '7', '10', 'public/uploads/audios/toan-chuc-cao-thu-chuong-0010-ten-vo-si.mp3', null, null, '2019-12-07 10:22:15', '2019-12-07 10:22:15');
INSERT INTO `chapters` VALUES ('78', '', '7', '9', 'public/uploads/audios/toan-chuc-cao-thu chuong-0009-doi-tay-cua-diep-tu.mp3', null, null, '2019-12-07 10:22:20', '2019-12-07 10:22:20');
INSERT INTO `chapters` VALUES ('79', '', '7', '6', 'public/uploads/audios/toan-chuc-cao-thu chuong-0006-o-thien-co.mp3', null, null, '2019-12-07 10:22:28', '2019-12-07 10:22:28');
INSERT INTO `chapters` VALUES ('80', 'Kĩ năng phối hợp', '7', '5', 'public/uploads/audios/toan-chuc-cao-thu chuong-0005-ki-nang-phoi-hop.mp3', null, null, '2019-12-07 10:22:34', '2019-12-07 10:22:34');
INSERT INTO `chapters` VALUES ('81', 'Ca Đêm', '7', '3', 'public/uploads/audios/toan-chuc-cao-thu chuong-0003-ca-dem.mp3', null, null, '2019-12-07 10:22:38', '2019-12-07 10:22:38');
INSERT INTO `chapters` VALUES ('82', '', '7', '2', 'public/uploads/audios/toan-chuc-cao-thu chuong-0002-khu-c-so-47.mp3', null, null, '2019-12-07 10:22:44', '2019-12-07 10:22:44');
INSERT INTO `chapters` VALUES ('83', 'Cao thủ bị trục xuất', '7', '1', 'public/uploads/audios/toan-chuc-cao-thu chuong-0001-cao-thu-bi-truc-xuat.mp3', null, '', '2019-12-07 10:22:49', '2019-12-07 10:22:49');
INSERT INTO `chapters` VALUES ('84', 'Khẩu chiến kiêm điện thần thương', '16', '15', 'public/uploads/audios/thinh-the-dich-phi+Chương-0015-Khẩu-Chiến-Kim-Điện-Thần-Thương-.mp3', null, 'new', '2019-12-07 10:23:26', '2019-12-07 10:23:26');
INSERT INTO `chapters` VALUES ('85', 'Nhị cữu cữu bao che khuyết điểm', '16', '14', 'public/uploads/audios/thinh-the-dich-phi+Chương-0014-Nhị-Cữu-Cữu-Bao-Che-Khuyết-Điểm-.mp3', null, null, '2019-12-07 10:23:36', '2019-12-07 10:23:36');
INSERT INTO `chapters` VALUES ('86', '', '16', '13', 'public/uploads/audios/thinh-the-dich-phi+Chương-0013-Khẩu-Chiến-Hoa-Viên-.mp3', null, null, '2019-12-07 10:23:55', '2019-12-07 10:23:55');
INSERT INTO `chapters` VALUES ('87', '', '16', '12', 'public/uploads/audios/thinh-the-dich-phi+Chương-0012-Hiền-Chiêu-Thái-Phi-.mp3', null, null, '2019-12-07 10:24:02', '2019-12-07 10:24:02');
INSERT INTO `chapters` VALUES ('88', '', '16', '11', 'public/uploads/audios/thinh-the-dich-phi+Chương-0011-Nha-Đầu-Tú-Nương-.mp3', null, null, '2019-12-07 10:24:08', '2019-12-07 10:24:08');
INSERT INTO `chapters` VALUES ('89', '', '16', '10', 'public/uploads/audios/thinh-the-dich-phi+Chương-0010-Triệu-Di-Nương-Xin-Giúp-Đỡ-.mp3', null, null, '2019-12-07 10:24:14', '2019-12-07 10:24:14');
INSERT INTO `chapters` VALUES ('90', '', '16', '9', 'public/uploads/audios/thinh-the-dich-phi+Chương-0009-Di-Nương-Tới-Chơi-.mp3', null, null, '2019-12-07 10:24:30', '2019-12-07 10:24:30');
INSERT INTO `chapters` VALUES ('91', '', '16', '8', 'public/uploads/audios/thinh-the-dich-phi+Chương-0008-Hậu-Phát-Chế-Nhân-Vương-Thị-Thổ-Huyết-.mp3', null, null, '2019-12-07 10:24:37', '2019-12-07 10:24:37');
INSERT INTO `chapters` VALUES ('92', '', '16', '7', 'public/uploads/audios/thinh-the-dich-phi+Chương-0007-Cáo-Trạng-Và-Phản-Cáo-Trạng-.mp3', null, null, '2019-12-07 10:24:42', '2019-12-07 10:24:42');
INSERT INTO `chapters` VALUES ('93', '', '16', '6', 'public/uploads/audios/thinh-the-dich-phi+Chương-0006-Vương-Gia-Mua-Đồ-Là-Phải-Trả-Tiền-.mp3', null, null, '2019-12-07 10:24:48', '2019-12-07 10:24:48');
INSERT INTO `chapters` VALUES ('94', '', '16', '5', 'public/uploads/audios/thinh-the-dich-phi+Chương-0005-Ép-Mua-Ép-Bán-.mp3', null, null, '2019-12-07 10:24:54', '2019-12-07 10:24:54');
INSERT INTO `chapters` VALUES ('95', '', '16', '4', 'public/uploads/audios/thinh-the-dich-phi+Chương-0004-Tính-Toán-Của-Vương-Thị-.mp3', null, null, '2019-12-07 10:24:59', '2019-12-07 10:24:59');
INSERT INTO `chapters` VALUES ('96', '', '16', '3', 'public/uploads/audios/thinh-the-dich-phi+Chương-0003-Mợ-đến-.mp3', null, null, '2019-12-07 10:25:05', '2019-12-07 10:25:05');
INSERT INTO `chapters` VALUES ('97', '', '16', '2', 'public/uploads/audios/thinh-the-dich-phi+Chương-0002-Đồ-cưới-.mp3', null, null, '2019-12-07 10:25:10', '2019-12-07 10:25:10');
INSERT INTO `chapters` VALUES ('98', '', '16', '1', 'public/uploads/audios/thinh-the-dich-phi+Chương-0001-Từ-hôn-Tứ-hôn-.mp3', null, '', '2019-12-07 10:25:18', '2019-12-07 10:25:18');
INSERT INTO `chapters` VALUES ('99', 'Vào đồn cảnh sát', '3', '15', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0015-vao-don-canh-sat.mp3', null, 'new', '2019-12-07 10:25:34', '2019-12-07 10:25:34');
INSERT INTO `chapters` VALUES ('100', '', '3', '13', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0013-khong-phai-ten-lua-dao.mp3', null, null, '2019-12-07 10:25:39', '2019-12-07 10:25:39');
INSERT INTO `chapters` VALUES ('101', '', '3', '12', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0012-ong-chua-phan-ngon-hay-chua-phan-goc.mp3', null, null, '2019-12-07 10:25:47', '2019-12-07 10:25:47');
INSERT INTO `chapters` VALUES ('102', '', '3', '11', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0011-phuc-tap-cua-truc-ban-thay.mp3', null, null, '2019-12-07 10:25:53', '2019-12-07 10:25:53');
INSERT INTO `chapters` VALUES ('103', '', '3', '10', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0010-toi-that-tam-muon-moi-anh-an-com.mp3', null, null, '2019-12-07 10:25:59', '2019-12-07 10:25:59');
INSERT INTO `chapters` VALUES ('104', '', '3', '9', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0009-hoa-khoi-truong-dai-hoc-ninh-hai.mp3', null, null, '2019-12-07 10:26:04', '2019-12-07 10:26:04');
INSERT INTO `chapters` VALUES ('105', '', '3', '8', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0008-ban-cung-thue-phong.mp3', null, null, '2019-12-07 10:26:10', '2019-12-07 10:26:10');
INSERT INTO `chapters` VALUES ('106', '', '3', '7', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0007-ten-nghien-may-tinh-ru-ru-trong-nha.mp3', null, null, '2019-12-07 10:26:15', '2019-12-07 10:26:15');
INSERT INTO `chapters` VALUES ('107', '', '3', '6', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0006-thanh-than-phu.mp3', null, null, '2019-12-07 10:26:19', '2019-12-07 10:26:19');
INSERT INTO `chapters` VALUES ('108', '', '3', '5', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0005-thue-phong-tro.mp3', null, null, '2019-12-07 10:26:25', '2019-12-07 10:26:25');
INSERT INTO `chapters` VALUES ('109', '', '3', '4', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0004-khach-hang-dau-tien.mp3', null, null, '2019-12-07 10:26:31', '2019-12-07 10:26:31');
INSERT INTO `chapters` VALUES ('110', '', '3', '3', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0003-ten-than-kinh-ban-bua.mp3', null, null, '2019-12-07 10:26:38', '2019-12-07 10:26:38');
INSERT INTO `chapters` VALUES ('111', '', '3', '2', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0002-nha-ho-ninh-tu-hon.mp3', null, null, '2019-12-07 10:26:43', '2019-12-07 10:26:43');
INSERT INTO `chapters` VALUES ('112', '', '3', '1', 'public/uploads/audios/thieu-gia-bi-bo-roi-chuong-0001-cau-nho-co-bi-te-liet-khong.mp3', null, '', '2019-12-07 10:26:47', '2019-12-07 10:26:47');
INSERT INTO `chapters` VALUES ('113', '', '27', '6', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0006.mp3', null, 'new', '2019-12-07 10:27:09', '2019-12-07 10:27:09');
INSERT INTO `chapters` VALUES ('114', '', '27', '5', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0005-Cảm-xúc-xâu-sắc.mp3', null, null, '2019-12-07 10:27:14', '2019-12-07 10:27:14');
INSERT INTO `chapters` VALUES ('115', '', '27', '4', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0004-Chiến-tranh-đột-phá.mp3', null, null, '2019-12-07 10:27:20', '2019-12-07 10:27:20');
INSERT INTO `chapters` VALUES ('116', '', '27', '3', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0003.mp3', null, null, '2019-12-07 10:27:26', '2019-12-07 10:27:26');
INSERT INTO `chapters` VALUES ('117', '', '27', '2', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0002-Không-tên.mp3', null, null, '2019-12-07 10:27:33', '2019-12-07 10:27:33');
INSERT INTO `chapters` VALUES ('118', '', '27', '1', 'public/uploads/audios/thanh-kiem-cuc-doan-Chương-0001-Cliff-Rebirth-cho-thanh-thiếu-niên.mp3', null, '', '2019-12-07 10:27:39', '2019-12-07 10:27:39');
INSERT INTO `chapters` VALUES ('119', 'Ra nhập Phượng gia', '24', '15', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0015-Ra-nhập-Phượng-gia.mp3', null, 'new', '2019-12-07 10:27:47', '2019-12-07 10:27:47');
INSERT INTO `chapters` VALUES ('120', '', '24', '14', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0014-Tam-cữu-gây-khó-dễ.mp3', null, null, '2019-12-07 10:27:54', '2019-12-07 10:27:54');
INSERT INTO `chapters` VALUES ('121', '', '24', '13', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0013-Vào-Phượng-Thiên-Phủ.mp3', null, null, '2019-12-07 10:28:34', '2019-12-07 10:28:34');
INSERT INTO `chapters` VALUES ('122', '', '24', '12', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0012-Hình-săm-chữ-“Qủy-hoàng”.mp3', null, null, '2019-12-07 10:28:41', '2019-12-07 10:28:41');
INSERT INTO `chapters` VALUES ('123', '', '24', '11', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0011-Lấy-thân-báo-đáp-như-thế-nào.mp3', null, null, '2019-12-07 10:28:52', '2019-12-07 10:28:52');
INSERT INTO `chapters` VALUES ('124', '', '24', '10', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0010-Giết-người-như-cắt-cây-cỏ.mp3', null, null, '2019-12-07 10:29:02', '2019-12-07 10:29:02');
INSERT INTO `chapters` VALUES ('125', '', '24', '9', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0009-Gặp-được-sơn-tặc.mp3', null, null, '2019-12-07 10:29:08', '2019-12-07 10:29:08');
INSERT INTO `chapters` VALUES ('126', '', '24', '8', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0008-Rời-đi-Qúy-phủ.mp3', null, null, '2019-12-07 10:29:14', '2019-12-07 10:29:14');
INSERT INTO `chapters` VALUES ('127', '', '24', '7', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0007-Nguyên-nhân-dẫn-đến-cái-chết-rất-kì-lạ.mp3', null, null, '2019-12-07 10:29:19', '2019-12-07 10:29:19');
INSERT INTO `chapters` VALUES ('128', '', '24', '6', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0006-Tính-kế.mp3', null, null, '2019-12-07 10:29:25', '2019-12-07 10:29:25');
INSERT INTO `chapters` VALUES ('129', '', '24', '5', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0005-Lên-làm-chính-thế.mp3', null, null, '2019-12-07 10:29:31', '2019-12-07 10:29:31');
INSERT INTO `chapters` VALUES ('130', '', '24', '4', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0004-Đừng-chỗ-này-cản-mắt-ta.mp3', null, null, '2019-12-07 10:29:38', '2019-12-07 10:29:38');
INSERT INTO `chapters` VALUES ('131', '', '24', '3', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0003-Kiếp-trước-pháp-y.mp3', null, null, '2019-12-07 10:29:43', '2019-12-07 10:29:43');
INSERT INTO `chapters` VALUES ('132', '', '24', '2', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0002-Hậu-sản-rong-huyết.mp3', null, null, '2019-12-07 10:29:47', '2019-12-07 10:29:47');
INSERT INTO `chapters` VALUES ('133', '', '24', '1', 'public/uploads/audios/than-y-quy-nu-cung-chieu-that-hoang-phi-Chương-0001-Sinh-hạ-nữ-nhi.mp3', null, '', '2019-12-07 10:29:53', '2019-12-07 10:29:53');
INSERT INTO `chapters` VALUES ('134', 'Ai cao quý hơn ai', '15', '15', 'public/uploads/audios/tao-tac+Chương-0015-Ai-cao-quý-hơn-ai-.mp3', null, 'new', '2019-12-07 10:30:01', '2019-12-07 10:30:01');
INSERT INTO `chapters` VALUES ('135', '', '15', '14', 'public/uploads/audios/tao-tac+Chương-0014-Đệ-tử-Lộc-Môn-.mp3', null, null, '2019-12-07 10:30:07', '2019-12-07 10:30:07');
INSERT INTO `chapters` VALUES ('136', '', '15', '13', 'public/uploads/audios/tao-tac+Chương-0013-Tỷ-tỷ-.mp3', null, null, '2019-12-07 10:30:13', '2019-12-07 10:30:13');
INSERT INTO `chapters` VALUES ('137', '', '15', '12', 'public/uploads/audios/tao-tac+Chương-0012-Đặng-thôn-ở-Cức-Dương-.mp3', null, null, '2019-12-07 10:30:20', '2019-12-07 10:30:20');
INSERT INTO `chapters` VALUES ('138', '', '15', '11', 'public/uploads/audios/tao-tac+Chương-0011-Ta-có-chí-bay-cao-.mp3', null, null, '2019-12-07 10:30:27', '2019-12-07 10:30:27');
INSERT INTO `chapters` VALUES ('139', '', '15', '10', 'public/uploads/audios/tao-tac+Chương-0010-Tiếng-gáy-đầu-tiên-.mp3', null, null, '2019-12-07 10:30:32', '2019-12-07 10:30:32');
INSERT INTO `chapters` VALUES ('140', '', '15', '9', 'public/uploads/audios/tao-tac+Chương-0009-Người-tới-trong-đêm-tuyết-.mp3', null, null, '2019-12-07 10:30:39', '2019-12-07 10:30:39');
INSERT INTO `chapters` VALUES ('141', '', '15', '8', 'public/uploads/audios/tao-tac+Chương-0008-Dự-tính-tương-lai-.mp3', null, null, '2019-12-07 10:30:45', '2019-12-07 10:30:45');
INSERT INTO `chapters` VALUES ('142', '', '15', '7', 'public/uploads/audios/tao-tac+Chương-0007-Đại-bàng-sẽ-có-ngày-tung-cánh-.mp3', null, null, '2019-12-07 10:30:49', '2019-12-07 10:30:49');
INSERT INTO `chapters` VALUES ('143', '', '15', '6', 'public/uploads/audios/tao-tac+Chương-0006-Đại-trượng-phu-giết-người-2-.mp3', null, null, '2019-12-07 10:30:54', '2019-12-07 10:30:54');
INSERT INTO `chapters` VALUES ('144', '', '15', '5', 'public/uploads/audios/tao-tac+Chương-0005-Đại-trượng-phu-giết-người-.mp3', null, null, '2019-12-07 10:31:01', '2019-12-07 10:31:01');
INSERT INTO `chapters` VALUES ('145', '', '15', '4', 'public/uploads/audios/tao-tac+Chương-0004-Cửa-hàng-Thành-Ký-.mp3', null, null, '2019-12-07 10:31:06', '2019-12-07 10:31:06');
INSERT INTO `chapters` VALUES ('146', '', '15', '3', 'public/uploads/audios/tao-tac+Chương-0003-Ta-sẽ-kiên-cường-.mp3', null, null, '2019-12-07 10:31:11', '2019-12-07 10:31:11');
INSERT INTO `chapters` VALUES ('147', '', '15', '2', 'public/uploads/audios/tao-tac+Chương-0002-Sinh-vào-Kiến-An-năm-thứ-nhất-.mp3', null, null, '2019-12-07 10:31:17', '2019-12-07 10:31:17');
INSERT INTO `chapters` VALUES ('148', '', '15', '1', 'public/uploads/audios/tao-tac+Chương-0001-Kiếp-sau-đừng-làm-anh-hùng-.mp3', null, '', '2019-12-07 10:31:23', '2019-12-07 10:31:23');
INSERT INTO `chapters` VALUES ('149', 'Dưới giường có báu vật', '26', '15', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0015-duoi-giuong-co-bau-vat.mp3', null, 'new', '2019-12-07 10:31:30', '2019-12-07 10:31:30');
INSERT INTO `chapters` VALUES ('150', '', '26', '14', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0014-kim-cuong-bien-mat-2.mp3', null, null, '2019-12-07 10:31:37', '2019-12-07 10:31:37');
INSERT INTO `chapters` VALUES ('151', '', '26', '13', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0013-kim-cuong-bien-mat-1.mp3', null, null, '2019-12-07 10:31:45', '2019-12-07 10:31:45');
INSERT INTO `chapters` VALUES ('152', '', '26', '12', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0012-cuop-boc-2.mp3', null, null, '2019-12-07 10:31:51', '2019-12-07 10:31:51');
INSERT INTO `chapters` VALUES ('153', '', '26', '11', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0011-cuop-boc-1.mp3', null, null, '2019-12-07 10:31:58', '2019-12-07 10:31:58');
INSERT INTO `chapters` VALUES ('154', '', '26', '9', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0009-lai-tang.mp3', null, null, '2019-12-07 10:32:04', '2019-12-07 10:32:04');
INSERT INTO `chapters` VALUES ('155', '', '26', '8', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0008-tim-duoc-nguyen-nhan.mp3', null, null, '2019-12-07 10:32:10', '2019-12-07 10:32:10');
INSERT INTO `chapters` VALUES ('156', '', '26', '7', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0007-hinh-anh-lap-the.mp3', null, null, '2019-12-07 10:32:15', '2019-12-07 10:32:15');
INSERT INTO `chapters` VALUES ('157', '', '26', '6', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0006-cao-cap-bang-chung-hoang-duong-luc.mp3', null, null, '2019-12-07 10:32:21', '2019-12-07 10:32:21');
INSERT INTO `chapters` VALUES ('158', '', '26', '5', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0005-do-thach-phong-ba-ha.mp3', null, null, '2019-12-07 10:32:27', '2019-12-07 10:32:27');
INSERT INTO `chapters` VALUES ('159', '', '26', '4', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0004-do-thach-phong-ba-thuong.mp3', null, null, '2019-12-07 10:32:35', '2019-12-07 10:32:35');
INSERT INTO `chapters` VALUES ('160', '', '26', '3', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0003-trien-lam-chau-bau.mp3', null, null, '2019-12-07 10:32:48', '2019-12-07 10:32:48');
INSERT INTO `chapters` VALUES ('161', '', '26', '2', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0002-tro-ly-quan-li.mp3', null, null, '2019-12-07 10:32:57', '2019-12-07 10:32:57');
INSERT INTO `chapters` VALUES ('162', '', '26', '1', 'public/uploads/audios/sieu-cap-hoang-kim-thu-chuong-0001-tai-nan-trong-dem-giang-sinh.mp3', null, '', '2019-12-07 10:33:02', '2019-12-07 10:33:02');
INSERT INTO `chapters` VALUES ('163', 'Phía trước có ngọn núi', '13', '15', 'public/uploads/audios/say-mong-giang-son+Chuong-0015-Phía-trước-có-ngọn-núi.mp3', null, 'new', '2019-12-07 10:33:33', '2019-12-07 10:33:33');
INSERT INTO `chapters` VALUES ('164', '', '13', '14', 'public/uploads/audios/say-mong-giang-son+Chuong-0014-Thiên-tiên-nữ-hạ-phàm.mp3', null, null, '2019-12-07 10:33:39', '2019-12-07 10:33:39');
INSERT INTO `chapters` VALUES ('165', '', '13', '13', 'public/uploads/audios/say-mong-giang-son+Chuong-0013-Hai-huynh-đệ-ngồi-trên-tường.mp3', null, null, '2019-12-07 10:33:45', '2019-12-07 10:33:45');
INSERT INTO `chapters` VALUES ('166', '', '13', '11', 'public/uploads/audios/say-mong-giang-son+Chuong-0011-Hành-thích.mp3', null, null, '2019-12-07 10:33:54', '2019-12-07 10:33:54');
INSERT INTO `chapters` VALUES ('167', '', '13', '10', 'public/uploads/audios/say-mong-giang-son+Chuong-0010-Thiếu-nữ-yêu-thầm.mp3', null, null, '2019-12-07 10:34:00', '2019-12-07 10:34:00');
INSERT INTO `chapters` VALUES ('169', '', '13', '9', 'public/uploads/audios/say-mong-giang-son+Chuong-0009-Diện-phiến-nhi.mp3', null, null, '2019-12-07 10:34:14', '2019-12-07 10:34:14');
INSERT INTO `chapters` VALUES ('170', '', '13', '8', 'public/uploads/audios/say-mong-giang-son+Chuong-0008-Dương-phàm.mp3', null, null, '2019-12-07 10:34:25', '2019-12-07 10:34:25');
INSERT INTO `chapters` VALUES ('171', '', '13', '7', 'public/uploads/audios/say-mong-giang-son+Chuong-0007-Ngày-kỳ-tích-3.mp3', null, null, '2019-12-07 10:34:30', '2019-12-07 10:34:30');
INSERT INTO `chapters` VALUES ('172', '', '13', '6', 'public/uploads/audios/say-mong-giang-son+Chuong-0006-Ngày-kỳ-tích-2.mp3', null, null, '2019-12-07 10:34:37', '2019-12-07 10:34:37');
INSERT INTO `chapters` VALUES ('173', '', '13', '5', 'public/uploads/audios/say-mong-giang-son+Chuong-0005-Ngày-kỳ-tích-1.mp3', null, null, '2019-12-07 10:35:02', '2019-12-07 10:35:02');
INSERT INTO `chapters` VALUES ('174', '', '13', '4', 'public/uploads/audios/say-mong-giang-son+Chuong-0004-Trâm-cài-hình-bướm.mp3', null, null, '2019-12-07 10:35:08', '2019-12-07 10:35:08');
INSERT INTO `chapters` VALUES ('175', '', '13', '3', 'public/uploads/audios/say-mong-giang-son+Chuong-0003-A-Sửu-và-Nữu-Nữu.mp3', null, null, '2019-12-07 10:35:14', '2019-12-07 10:35:14');
INSERT INTO `chapters` VALUES ('176', '', '13', '2', 'public/uploads/audios/say-mong-giang-son+Chuong-0002-Thằng-bé-ăn-xin-trong-hẻm-Ba-Tiêu.mp3', null, null, '2019-12-07 10:35:19', '2019-12-07 10:35:19');
INSERT INTO `chapters` VALUES ('177', '', '13', '1', 'public/uploads/audios/say-mong-giang-son+Chuong-0001-Người-trong-chốn-đào-nguyên.mp3', null, '', '2019-12-07 10:35:24', '2019-12-07 10:35:24');
INSERT INTO `chapters` VALUES ('178', 'Chỉnh đỗ Di nương 7', '17', '15', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0015-Chỉnh-Đỗ-Di-nương-7-.mp3', null, 'new', '2019-12-07 10:35:33', '2019-12-07 10:35:33');
INSERT INTO `chapters` VALUES ('179', '', '17', '14', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0014-Chỉnh-Đỗ-Di-nương-6-.mp3', null, null, '2019-12-07 10:35:44', '2019-12-07 10:35:44');
INSERT INTO `chapters` VALUES ('180', '', '17', '13', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0013-Chỉnh-Đỗ-Di-nương-5-.mp3', null, null, '2019-12-07 10:35:58', '2019-12-07 10:35:58');
INSERT INTO `chapters` VALUES ('181', '', '17', '2', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0012-Chỉnh-Đỗ-Di-nương-4-.mp3', null, null, '2019-12-07 10:36:09', '2019-12-07 10:36:09');
INSERT INTO `chapters` VALUES ('182', '', '17', '11', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0011-Chỉnh-Đỗ-Di-nương-3-.mp3', null, null, '2019-12-07 10:36:16', '2019-12-07 10:36:16');
INSERT INTO `chapters` VALUES ('183', '', '17', '10', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0010-Chỉnh-Đỗ-Di-nương-2-.mp3', null, null, '2019-12-07 10:36:25', '2019-12-07 10:36:25');
INSERT INTO `chapters` VALUES ('184', '', '17', '9', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0009-Chỉnh-Đỗ-Di-nương-1-.mp3', null, null, '2019-12-07 10:36:32', '2019-12-07 10:36:32');
INSERT INTO `chapters` VALUES ('185', '', '17', '8', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0008-Vị-tiểu-thư-này-không-tầm-thường-5-.mp3', null, null, '2019-12-07 10:36:38', '2019-12-07 10:36:38');
INSERT INTO `chapters` VALUES ('186', '', '17', '7', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0007-Vị-tiểu-thư-này-không-tầm-thường-4-.mp3', null, null, '2019-12-07 10:36:43', '2019-12-07 10:36:43');
INSERT INTO `chapters` VALUES ('187', '', '17', '6', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0006-Vị-tiểu-thư-này-không-tầm-thường-3-.mp3', null, null, '2019-12-07 10:36:51', '2019-12-07 10:36:51');
INSERT INTO `chapters` VALUES ('188', '', '17', '5', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0005-Vị-tiểu-thư-này-không-tầm-thường-2-.mp3', null, null, '2019-12-07 10:36:59', '2019-12-07 10:36:59');
INSERT INTO `chapters` VALUES ('189', '', '17', '4', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0004-Vị-tiểu-thư-này-không-tầm-thường-1-.mp3', null, null, '2019-12-07 10:37:04', '2019-12-07 10:37:04');
INSERT INTO `chapters` VALUES ('190', '', '17', '3', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0003-Đỗ-di-nương-quá-quắt-3-.mp3', null, null, '2019-12-07 10:37:09', '2019-12-07 10:37:09');
INSERT INTO `chapters` VALUES ('191', '', '17', '2', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0002-Đỗ-di-nương-quá-quắt-2-.mp3', null, null, '2019-12-07 10:37:15', '2019-12-07 10:37:15');
INSERT INTO `chapters` VALUES ('192', '', '17', '1', 'public/uploads/audios/nu-nhan-sau-lung-de-quoc-thien-tai-tieu-vuong-phi+Chuong-0001-Đỗ-di-nương-quá-quắt-1-.mp3', null, '', '2019-12-07 10:37:21', '2019-12-07 10:37:21');
INSERT INTO `chapters` VALUES ('193', 'Hiểu lầm viên trân châu', '18', '15', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0015-Hiểu-lầm-viên-trân-châu-.mp3', null, 'new', '2019-12-07 10:37:46', '2019-12-07 10:37:46');
INSERT INTO `chapters` VALUES ('194', '', '18', '14', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0014-Luận-bàn-về-chữ-trinh-.mp3', null, null, '2019-12-07 10:37:52', '2019-12-07 10:37:52');
INSERT INTO `chapters` VALUES ('195', '', '18', '13', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0013-Sư-gia-danh-dự-.mp3', null, null, '2019-12-07 10:37:57', '2019-12-07 10:37:57');
INSERT INTO `chapters` VALUES ('196', '', '18', '12', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0012-Dây-dưa-kéo-dài-.mp3', null, null, '2019-12-07 10:38:05', '2019-12-07 10:38:05');
INSERT INTO `chapters` VALUES ('197', '', '18', '11', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0011-Bị-quan-đày-đọa-.mp3', null, null, '2019-12-07 10:38:10', '2019-12-07 10:38:10');
INSERT INTO `chapters` VALUES ('198', '', '18', '10', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0010-Bày-ra-kế-hiểm-.mp3', null, null, '2019-12-07 10:38:16', '2019-12-07 10:38:16');
INSERT INTO `chapters` VALUES ('199', '', '18', '9', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0009-Nhà-có-vợ-hiền-.mp3', null, null, '2019-12-07 10:38:22', '2019-12-07 10:38:22');
INSERT INTO `chapters` VALUES ('200', '', '18', '8', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0008-Đưa-nhau-ra-cửa-quan-.mp3', null, null, '2019-12-07 10:38:27', '2019-12-07 10:38:27');
INSERT INTO `chapters` VALUES ('201', '', '18', '7', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0007-Người-đẹp-trên-lưng-ngựa-.mp3', null, null, '2019-12-07 10:38:32', '2019-12-07 10:38:32');
INSERT INTO `chapters` VALUES ('202', '', '18', '6', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0006-Rời-nơi-núi-đồi-.mp3', null, null, '2019-12-07 10:38:38', '2019-12-07 10:38:38');
INSERT INTO `chapters` VALUES ('203', '', '18', '5', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0005-Lá-lành-đùm-lá-rách-.mp3', null, null, '2019-12-07 10:38:43', '2019-12-07 10:38:43');
INSERT INTO `chapters` VALUES ('204', '', '18', '4', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0004-Gia-cảnh-nghèo-khó-.mp3', null, null, '2019-12-07 10:38:49', '2019-12-07 10:38:49');
INSERT INTO `chapters` VALUES ('205', '', '18', '3', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0003-Chết-đi-sống-lại-.mp3', null, null, '2019-12-07 10:38:53', '2019-12-07 10:38:53');
INSERT INTO `chapters` VALUES ('206', '', '18', '2', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0002-Lén-vượt-thời-không-.mp3', null, null, '2019-12-07 10:38:58', '2019-12-07 10:38:58');
INSERT INTO `chapters` VALUES ('207', '', '18', '1', 'public/uploads/audios/nguoc-ve-thoi-minh+Chương-0001-Thiện-nhân-chín-kiếp-.mp3', null, '', '2019-12-07 10:39:04', '2019-12-07 10:39:04');
INSERT INTO `chapters` VALUES ('208', 'Mới đi vào giấc mộng', '6', '15', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0015-moi-di-vao-giac-mong.mp3', null, 'new', '2019-12-07 10:39:16', '2019-12-07 10:39:16');
INSERT INTO `chapters` VALUES ('209', '', '6', '14', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0014-giup-mac-quan.mp3', null, null, '2019-12-07 10:43:10', '2019-12-07 10:43:10');
INSERT INTO `chapters` VALUES ('210', '', '6', '13', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0013-lamborghini.mp3', null, null, '2019-12-07 10:43:19', '2019-12-07 10:43:19');
INSERT INTO `chapters` VALUES ('211', '', '6', '12', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0012-nu-hon-dau-tien-hien-cho-quy.mp3', null, null, '2019-12-07 10:43:28', '2019-12-07 10:43:28');
INSERT INTO `chapters` VALUES ('212', '', '6', '11', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0011-thuy-thi.mp3', null, null, '2019-12-07 10:43:35', '2019-12-07 10:43:35');
INSERT INTO `chapters` VALUES ('213', '', '6', '10', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0010-nuoc-dong.mp3', null, null, '2019-12-07 10:43:43', '2019-12-07 10:43:43');
INSERT INTO `chapters` VALUES ('214', '', '6', '9', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0009-xet-nha.mp3', null, null, '2019-12-07 10:43:49', '2019-12-07 10:43:49');
INSERT INTO `chapters` VALUES ('215', '', '6', '8', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0008-quy-dap-tuong.mp3', null, null, '2019-12-07 10:43:56', '2019-12-07 10:43:56');
INSERT INTO `chapters` VALUES ('216', '', '6', '7', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0007-cao-nhan.mp3', null, null, '2019-12-07 10:44:00', '2019-12-07 10:44:00');
INSERT INTO `chapters` VALUES ('217', '', '6', '6', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0006-thanh-tai-tung-hoanh-thien-ha.mp3', null, null, '2019-12-07 10:44:05', '2019-12-07 10:44:05');
INSERT INTO `chapters` VALUES ('218', '', '6', '5', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0005-quan-mon-de-tu.mp3', null, null, '2019-12-07 10:44:10', '2019-12-07 10:44:10');
INSERT INTO `chapters` VALUES ('219', '', '6', '4', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0004-mieu-cuong-co-su.mp3', null, null, '2019-12-07 10:44:15', '2019-12-07 10:44:15');
INSERT INTO `chapters` VALUES ('220', '', '6', '3', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0003-hoa-thieu-sat-thi.mp3', null, null, '2019-12-07 10:44:22', '2019-12-07 10:44:22');
INSERT INTO `chapters` VALUES ('221', '', '6', '2', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0002-khai-quan.mp3', null, null, '2019-12-07 10:44:27', '2019-12-07 10:44:27');
INSERT INTO `chapters` VALUES ('222', '', '6', '1', 'public/uploads/audios/mao-son-troc-quy-nhan-chuong-0001-mau-tu-sat-thi.mp3', null, '', '2019-12-07 10:44:32', '2019-12-07 10:44:32');
INSERT INTO `chapters` VALUES ('223', 'Chu tiểu thư thích sạch sẽ', '14', '15', 'public/uploads/audios/kieu-the-nhu-van+Chương-0015-Chu-tiểu-thư-thích-sạch-sẽ-.mp3', null, 'new', '2019-12-07 10:44:40', '2019-12-07 10:44:40');
INSERT INTO `chapters` VALUES ('224', '', '14', '14', 'public/uploads/audios/kieu-the-nhu-van+Chương-0014-Đối-thủ-rất-cường-đại-.mp3', null, null, '2019-12-07 10:44:46', '2019-12-07 10:44:46');
INSERT INTO `chapters` VALUES ('225', '', '14', '13', 'public/uploads/audios/kieu-the-nhu-van+Chương-0013-Chu-tiểu-thư-rất-đau-đớn-.mp3', null, null, '2019-12-07 10:44:54', '2019-12-07 10:44:54');
INSERT INTO `chapters` VALUES ('226', '', '14', '12', 'public/uploads/audios/kieu-the-nhu-van+Chương-0012-Có-một-cuộc-hẹn-cùng-phu-nhân-.mp3', null, null, '2019-12-07 10:44:59', '2019-12-07 10:44:59');
INSERT INTO `chapters` VALUES ('227', '', '14', '11', 'public/uploads/audios/kieu-the-nhu-van+Chương-0011-Thư-pháp-.mp3', null, null, '2019-12-07 10:45:04', '2019-12-07 10:45:04');
INSERT INTO `chapters` VALUES ('228', '', '14', '10', 'public/uploads/audios/kieu-the-nhu-van+Chương-0010-Khiêu-khích-.mp3', null, null, '2019-12-07 10:45:09', '2019-12-07 10:45:09');
INSERT INTO `chapters` VALUES ('229', '', '14', '9', 'public/uploads/audios/kieu-the-nhu-van+Chương-0009-Siêu-độ-.mp3', null, null, '2019-12-07 10:45:15', '2019-12-07 10:45:15');
INSERT INTO `chapters` VALUES ('230', '', '14', '8', 'public/uploads/audios/kieu-the-nhu-van+Chương-0008-Âm-hiểm-.mp3', null, null, '2019-12-07 10:45:21', '2019-12-07 10:45:21');
INSERT INTO `chapters` VALUES ('231', '', '14', '7', 'public/uploads/audios/kieu-the-nhu-van+Chương-0007-Ta-không-phải-đưa-lễ-.mp3', null, null, '2019-12-07 10:45:26', '2019-12-07 10:45:26');
INSERT INTO `chapters` VALUES ('232', '', '14', '6', 'public/uploads/audios/kieu-the-nhu-van+Chương-0006-Tỷ-thí-.mp3', null, null, '2019-12-07 10:45:36', '2019-12-07 10:45:36');
INSERT INTO `chapters` VALUES ('233', '', '14', '5', 'public/uploads/audios/kieu-the-nhu-van+Chương-0005-Rất-rối-rắm.mp3', null, null, '2019-12-07 10:45:44', '2019-12-07 10:45:44');
INSERT INTO `chapters` VALUES ('234', '', '14', '4', 'public/uploads/audios/kieu-the-nhu-van+Chương-0004-Tôn-Vị-thật-là-hư.mp3', null, null, '2019-12-07 10:45:50', '2019-12-07 10:45:50');
INSERT INTO `chapters` VALUES ('235', '', '14', '3', 'public/uploads/audios/kieu-the-nhu-van+Chương-0003-Tiểu-nha-đầu-có-ý-tứ.mp3', null, null, '2019-12-07 10:45:55', '2019-12-07 10:45:55');
INSERT INTO `chapters` VALUES ('236', '', '14', '2', 'public/uploads/audios/kieu-the-nhu-van+Chương-0002-Thư-đồng-vạn-tuế.mp3', null, null, '2019-12-07 10:46:00', '2019-12-07 10:46:00');
INSERT INTO `chapters` VALUES ('237', '', '14', '1', 'public/uploads/audios/kieu-the-nhu-van+Chương-0001-Đạo-tặc-nghệ-thuật-nhất.mp3', null, '', '2019-12-07 10:46:06', '2019-12-07 10:46:06');
INSERT INTO `chapters` VALUES ('238', 'Ta nguyện ý lấy thân báo đáp', '9', '8', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0008-Ta-nguyện-ý-lấy-thân-báo-đáp.mp3', null, 'new', '2019-12-07 10:46:15', '2019-12-07 10:46:15');
INSERT INTO `chapters` VALUES ('239', '', '9', '7', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0007-Thần-thú-tiểu-Bạch.mp3', null, null, '2019-12-07 10:46:24', '2019-12-07 10:46:24');
INSERT INTO `chapters` VALUES ('240', '', '9', '6', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0006-Đại-bạo-đặc-biệt-bạo.mp3', null, null, '2019-12-07 10:46:29', '2019-12-07 10:46:29');
INSERT INTO `chapters` VALUES ('241', '', '9', '5', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0005-Thần-tiên-đánh-nhau.mp3', null, null, '2019-12-07 10:46:47', '2019-12-07 10:46:47');
INSERT INTO `chapters` VALUES ('242', '', '9', '4', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0004-Điên-cuồng-thăng-cấp.mp3', null, null, '2019-12-07 10:46:53', '2019-12-07 10:46:53');
INSERT INTO `chapters` VALUES ('243', '', '9', '1', 'public/uploads/audios/he-thong-thang-cap-manh-nhat+Chương-0001-Cuồng-bạo-hệ-thống.mp3', null, null, '2019-12-07 10:46:59', '2019-12-07 10:46:59');
INSERT INTO `chapters` VALUES ('244', '', '20', '15', 'public/uploads/audios/gia-cat-linh-an+chuong-0015-Tứ-di-nương-suy-nghĩ-cho-kỹ-.mp3', null, 'new', '2019-12-07 10:47:11', '2019-12-07 10:47:11');
INSERT INTO `chapters` VALUES ('245', '', '20', '14', 'public/uploads/audios/gia-cat-linh-an+chuong-0014-Việc-xấu-không-thành-.mp3', null, null, '2019-12-07 10:47:18', '2019-12-07 10:47:18');
INSERT INTO `chapters` VALUES ('246', '', '20', '13', 'public/uploads/audios/gia-cat-linh-an+chuong-0013-Cơn-ác-mộng-của-Nhị-tiểu-thư-.mp3', null, null, '2019-12-07 10:47:23', '2019-12-07 10:47:23');
INSERT INTO `chapters` VALUES ('247', '', '20', '12', 'public/uploads/audios/gia-cat-linh-an+chuong-0012-Làm-hộ-vệ-của-ta-.mp3', null, null, '2019-12-07 10:47:33', '2019-12-07 10:47:33');
INSERT INTO `chapters` VALUES ('248', '', '20', '11', 'public/uploads/audios/gia-cat-linh-an+chuong-0011-Hẹn-Lục-vương-gia-.mp3', null, null, '2019-12-07 10:47:38', '2019-12-07 10:47:38');
INSERT INTO `chapters` VALUES ('249', '', '20', '10', 'public/uploads/audios/gia-cat-linh-an+chuong-0010-Tam-di-nương-không-phải-bị-bệnh-mà-chết-.mp3', null, null, '2019-12-07 10:47:49', '2019-12-07 10:47:49');
INSERT INTO `chapters` VALUES ('250', '', '20', '9', 'public/uploads/audios/gia-cat-linh-an+chuong-0009-Bản-vương-uống-cùng-Tam-tiểu-thư-hết-.mp3', null, null, '2019-12-07 10:48:00', '2019-12-07 10:48:00');
INSERT INTO `chapters` VALUES ('251', '', '20', '8', 'public/uploads/audios/gia-cat-linh-an+chuong-0008-Cút-khỏi-phủ-Thừa-tướng-.mp3', null, null, '2019-12-07 10:48:19', '2019-12-07 10:48:19');
INSERT INTO `chapters` VALUES ('252', '', '20', '7', 'public/uploads/audios/gia-cat-linh-an+chuong-0007-Lễ-vật-của-Linh-nhi-.mp3', null, null, '2019-12-07 10:48:29', '2019-12-07 10:48:29');
INSERT INTO `chapters` VALUES ('253', '', '20', '6', 'public/uploads/audios/gia-cat-linh-an+chuong-0006-Lần-đầu-gặp-mặt-.mp3', null, null, '2019-12-07 10:48:39', '2019-12-07 10:48:39');
INSERT INTO `chapters` VALUES ('254', '', '20', '5', 'public/uploads/audios/gia-cat-linh-an+chuong-0005-Linh-nhi-đến-cảm-ơn-mẹ-.mp3', null, null, '2019-12-07 10:48:47', '2019-12-07 10:48:47');
INSERT INTO `chapters` VALUES ('255', '', '20', '4', 'public/uploads/audios/gia-cat-linh-an+chuong-0004-Tiêu-quản-gia-.mp3', null, null, '2019-12-07 10:48:55', '2019-12-07 10:48:55');
INSERT INTO `chapters` VALUES ('256', '', '20', '3', 'public/uploads/audios/gia-cat-linh-an+chuong-0003-Hồi-phủ-.mp3', null, null, '2019-12-07 10:49:03', '2019-12-07 10:49:03');
INSERT INTO `chapters` VALUES ('257', '', '20', '2', 'public/uploads/audios/gia-cat-linh-an+chuong-0002-Chén-thuốc-có-độc-.mp3', null, null, '2019-12-07 10:49:08', '2019-12-07 10:49:08');
INSERT INTO `chapters` VALUES ('258', '', '20', '1', 'public/uploads/audios/gia-cat-linh-an+chuong-0001-Kiếp-trước-kiếp-này-.mp3', null, '', '2019-12-07 10:49:14', '2019-12-07 10:49:14');
INSERT INTO `chapters` VALUES ('259', 'Ếch ngồi đáy giếng', '10', '15', 'public/uploads/audios/duong-chuyen-chuong-0015-ech-ngoi-day-gieng.mp3', null, 'new', '2019-12-07 10:49:24', '2019-12-07 10:49:24');
INSERT INTO `chapters` VALUES ('260', '', '10', '14', 'public/uploads/audios/duong-chuyen-chuong-0014-va-dau-vao-tuong.mp3', null, null, '2019-12-07 10:49:29', '2019-12-07 10:49:29');
INSERT INTO `chapters` VALUES ('261', '', '10', '13', 'public/uploads/audios/duong-chuyen-chuong-0013-dien-kien-dai-tuong-quan.mp3', null, null, '2019-12-07 10:49:34', '2019-12-07 10:49:34');
INSERT INTO `chapters` VALUES ('262', '', '10', '12', 'public/uploads/audios/duong-chuyen-chuong-0012-bi-ai-cua-ngo-thua-an.mp3', null, null, '2019-12-07 10:49:39', '2019-12-07 10:49:39');
INSERT INTO `chapters` VALUES ('263', '', '10', '11', 'public/uploads/audios/duong-chuyen-chuong-0011-nguoi-bat-thuong-ngua-cung-bat-thuong.mp3', null, null, '2019-12-07 10:49:46', '2019-12-07 10:49:46');
INSERT INTO `chapters` VALUES ('264', '', '10', '10', 'public/uploads/audios/duong-chuyen-chuong-0010-tam-rua-va-an-ngon.mp3', null, null, '2019-12-07 10:49:53', '2019-12-07 10:49:53');
INSERT INTO `chapters` VALUES ('265', '', '10', '9', 'public/uploads/audios/duong-chuyen-chuong-0009-so-duong.mp3', null, null, '2019-12-07 10:49:58', '2019-12-07 10:49:58');
INSERT INTO `chapters` VALUES ('266', '', '10', '8', 'public/uploads/audios/duong-chuyen-chuong-0008-trinh-xu-mac.mp3', null, null, '2019-12-07 10:50:09', '2019-12-07 10:50:09');
INSERT INTO `chapters` VALUES ('267', '', '10', '7', 'public/uploads/audios/duong-chuyen-chuong-0007-bi-coi-thuong.mp3', null, null, '2019-12-07 10:50:14', '2019-12-07 10:50:14');
INSERT INTO `chapters` VALUES ('268', '', '10', '6', 'public/uploads/audios/duong-chuyen-chuong-0006-bo-chut-loi-nho.mp3', null, null, '2019-12-07 10:50:19', '2019-12-07 10:50:19');
INSERT INTO `chapters` VALUES ('269', '', '10', '5', 'public/uploads/audios/duong-chuyen-chuong-0005-muoi-quy-hon-mang.mp3', null, null, '2019-12-07 10:50:23', '2019-12-07 10:50:23');
INSERT INTO `chapters` VALUES ('270', '', '10', '4', 'public/uploads/audios/duong-chuyen-chuong-0004-day-la-nam-trinh-quan.mp3', null, null, '2019-12-07 10:50:43', '2019-12-07 10:50:43');
INSERT INTO `chapters` VALUES ('271', '', '10', '3', 'public/uploads/audios/duong-chuyen-chuong-0003-co-tu-co-tan.mp3', null, null, '2019-12-07 10:50:48', '2019-12-07 10:50:48');
INSERT INTO `chapters` VALUES ('272', '', '10', '2', 'public/uploads/audios/duong-chuyen-chuong-0002-nguoi-chang-bang-ngua.mp3', null, null, '2019-12-07 10:50:53', '2019-12-07 10:50:53');
INSERT INTO `chapters` VALUES ('273', '', '10', '1', 'public/uploads/audios/duong-chuyen-chuong-0001-thuong-hai-tang-dien.mp3', null, '', '2019-12-07 10:50:58', '2019-12-07 10:50:58');
INSERT INTO `chapters` VALUES ('274', 'Thật sự phát tài', '4', '15', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0015-that-su-phat-tai-1.mp3', null, 'new', '2019-12-07 10:51:06', '2019-12-07 10:51:06');
INSERT INTO `chapters` VALUES ('275', '', '4', '14', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0014-khiep-so-duoc-su-dien.mp3', null, null, '2019-12-07 10:51:12', '2019-12-07 10:51:12');
INSERT INTO `chapters` VALUES ('276', '', '4', '13', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0013-giang-chinh-phat-uy-hanh-dien-2.mp3', null, null, '2019-12-07 10:51:32', '2019-12-07 10:51:32');
INSERT INTO `chapters` VALUES ('277', '', '4', '12', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0012-giang-chinh-phat-uy-hanh-dien-1.mp3', null, null, '2019-12-07 10:51:37', '2019-12-07 10:51:37');
INSERT INTO `chapters` VALUES ('278', '', '4', '11', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0011-quan-gia-giang-chinh-buon-rau-2.mp3', null, null, '2019-12-07 10:51:43', '2019-12-07 10:51:43');
INSERT INTO `chapters` VALUES ('279', '', '4', '10', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0010-quan-gia-giang-chinh-buon-rau-1.mp3', null, null, '2019-12-07 10:51:49', '2019-12-07 10:51:49');
INSERT INTO `chapters` VALUES ('280', '', '4', '9', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0009-tri-khong-het-ta-chet-cung-cong-chua-2.mp3', null, null, '2019-12-07 10:51:56', '2019-12-07 10:51:56');
INSERT INTO `chapters` VALUES ('281', '', '4', '8', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0008-tri-khong-het-ta-chet-cung-cong-chua-1.mp3', null, null, '2019-12-07 10:52:01', '2019-12-07 10:52:01');
INSERT INTO `chapters` VALUES ('282', '', '4', '7', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0007-cai-mat-nay-van-la-chinh-nguoi-danh-di-2.mp3', null, null, '2019-12-07 10:52:08', '2019-12-07 10:52:08');
INSERT INTO `chapters` VALUES ('283', '', '4', '6', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0006-cai-mat-nay-van-la-chinh-nguoi-danh-di-1.mp3', null, null, '2019-12-07 10:52:15', '2019-12-07 10:52:15');
INSERT INTO `chapters` VALUES ('284', '', '4', '5', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0005-dua-mat-den-cua-hung-hang-ma-danh.mp3', null, null, '2019-12-07 10:52:23', '2019-12-07 10:52:23');
INSERT INTO `chapters` VALUES ('285', '', '4', '4', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0004-phu-than-bao-che-khuyet-diem-ban-be-nghia-khi-2.mp3', null, null, '2019-12-07 10:52:29', '2019-12-07 10:52:29');
INSERT INTO `chapters` VALUES ('286', '', '4', '3', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0003-phu-than-bao-che-khuyet-diem-ban-be-nghia-khi-1.mp3', null, null, '2019-12-07 10:52:34', '2019-12-07 10:52:34');
INSERT INTO `chapters` VALUES ('287', '', '4', '2', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0002-thien-de-chi-tu-chuyen-the-trung-sinh-2.mp3', null, null, '2019-12-07 10:52:39', '2019-12-07 10:52:39');
INSERT INTO `chapters` VALUES ('288', '', '4', '1', 'public/uploads/audios/doc-ton-tam-gioi-chuong-0001-thien-de-chi-tu-chuyen-the-trung-sinh-1.mp3', null, '', '2019-12-07 10:52:46', '2019-12-07 10:52:46');
INSERT INTO `chapters` VALUES ('289', 'Phát tài đại kế', '21', '15', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0015-phat-tai-dai-ke.mp3', null, 'new', '2019-12-07 10:53:05', '2019-12-07 10:53:05');
INSERT INTO `chapters` VALUES ('290', '', '21', '14', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0014-vo-y-cuu-nguoi.mp3', null, null, '2019-12-07 10:53:10', '2019-12-07 10:53:10');
INSERT INTO `chapters` VALUES ('291', '', '21', '13', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0013-nghi-ky-lan-nhau.mp3', null, null, '2019-12-07 10:53:16', '2019-12-07 10:53:16');
INSERT INTO `chapters` VALUES ('292', '', '21', '12', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0012-lao-yeu-cu-hoat.mp3', null, null, '2019-12-07 10:53:21', '2019-12-07 10:53:21');
INSERT INTO `chapters` VALUES ('293', '', '21', '11', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0011-truy-binh-duoi-toi.mp3', null, null, '2019-12-07 10:53:26', '2019-12-07 10:53:26');
INSERT INTO `chapters` VALUES ('294', '', '21', '10', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0010-phan-dau-quen-minh.mp3', null, null, '2019-12-07 10:53:32', '2019-12-07 10:53:32');
INSERT INTO `chapters` VALUES ('295', '', '21', '9', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0009-tiep-tuc-len-duong.mp3', null, null, '2019-12-07 10:53:37', '2019-12-07 10:53:37');
INSERT INTO `chapters` VALUES ('296', '', '21', '8', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0008-thong-bat-duc-sinh.mp3', null, null, '2019-12-07 10:53:45', '2019-12-07 10:53:45');
INSERT INTO `chapters` VALUES ('297', '', '21', '7', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0007-hoa-thi-chi-bich.mp3', null, null, '2019-12-07 10:53:49', '2019-12-07 10:53:49');
INSERT INTO `chapters` VALUES ('298', '', '21', '6', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0006-cuu-huyen-dai-phap.mp3', null, null, '2019-12-07 10:53:54', '2019-12-07 10:53:54');
INSERT INTO `chapters` VALUES ('299', '', '21', '5', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0005-sam-dong-giua-troi-hoang.mp3', null, null, '2019-12-07 10:54:00', '2019-12-07 10:54:00');
INSERT INTO `chapters` VALUES ('300', '', '21', '4', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0004-roi-khoi-duong-chau.mp3', null, null, '2019-12-07 10:54:06', '2019-12-07 10:54:06');
INSERT INTO `chapters` VALUES ('301', '', '21', '3', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0003-roi-khoi-duong-chau.mp3', null, null, '2019-12-07 10:54:11', '2019-12-07 10:54:11');
INSERT INTO `chapters` VALUES ('302', '', '21', '2', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0002-dai-hoa-lam-dau.mp3', null, null, '2019-12-07 10:54:16', '2019-12-07 10:54:16');
INSERT INTO `chapters` VALUES ('303', '', '21', '1', 'public/uploads/audios/dai-duong-song-long-truyen-chuong-0001-nuong-tua-lan-nhau.mp3', null, '', '2019-12-07 10:54:20', '2019-12-07 10:54:20');
INSERT INTO `chapters` VALUES ('304', '', '8', '15', 'public/uploads/audios/Dai-chua-te-0015.mp3', null, 'new', '2019-12-07 10:54:30', '2019-12-07 10:54:30');
INSERT INTO `chapters` VALUES ('305', '', '8', '14', 'public/uploads/audios/Dai-chua-te-0014.mp3', null, null, '2019-12-07 10:54:38', '2019-12-07 10:54:38');
INSERT INTO `chapters` VALUES ('306', '', '8', '13', 'public/uploads/audios/Dai-chua-te-0013.mp3', null, null, '2019-12-07 10:54:42', '2019-12-07 10:54:42');
INSERT INTO `chapters` VALUES ('307', '', '8', '12', 'public/uploads/audios/Dai-chua-te-0012.mp3', null, null, '2019-12-07 10:54:45', '2019-12-07 10:54:45');
INSERT INTO `chapters` VALUES ('308', '', '8', '11', 'public/uploads/audios/Dai-chua-te-0011.mp3', null, null, '2019-12-07 10:54:47', '2019-12-07 10:54:47');
INSERT INTO `chapters` VALUES ('309', '', '8', '10', 'public/uploads/audios/Dai-chua-te-0010.mp3', null, null, '2019-12-07 10:54:50', '2019-12-07 10:54:50');
INSERT INTO `chapters` VALUES ('310', '', '8', '9', 'public/uploads/audios/Dai-chua-te-0009.mp3', null, null, '2019-12-07 10:54:53', '2019-12-07 10:54:53');
INSERT INTO `chapters` VALUES ('311', '', '8', '8', 'public/uploads/audios/Dai-chua-te-0008.mp3', null, null, '2019-12-07 10:54:56', '2019-12-07 10:54:56');
INSERT INTO `chapters` VALUES ('312', '', '8', '7', 'public/uploads/audios/Dai-chua-te-0007.mp3', null, null, '2019-12-07 10:54:59', '2019-12-07 10:54:59');
INSERT INTO `chapters` VALUES ('313', '', '8', '6', 'public/uploads/audios/Dai-chua-te-0006.mp3', null, null, '2019-12-07 10:55:02', '2019-12-07 10:55:02');
INSERT INTO `chapters` VALUES ('314', '', '8', '5', 'public/uploads/audios/Dai-chua-te-0005.mp3', null, null, '2019-12-07 10:55:04', '2019-12-07 10:55:04');
INSERT INTO `chapters` VALUES ('315', '', '8', '4', 'public/uploads/audios/Dai-chua-te-0004.mp3', null, null, '2019-12-07 10:55:07', '2019-12-07 10:55:07');
INSERT INTO `chapters` VALUES ('316', '', '8', '3', 'public/uploads/audios/Dai-chua-te-0003.mp3', null, null, '2019-12-07 10:55:10', '2019-12-07 10:55:10');
INSERT INTO `chapters` VALUES ('317', '', '8', '2', 'public/uploads/audios/Dai-chua-te-0002.mp3', null, null, '2019-12-07 10:55:12', '2019-12-07 10:55:12');
INSERT INTO `chapters` VALUES ('318', '', '8', '1', 'public/uploads/audios/Dai-chua-te-0001.mp3', null, '', '2019-12-07 10:55:14', '2019-12-07 10:55:14');
INSERT INTO `chapters` VALUES ('319', '', '23', '14', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0014-cat-ruou-che-muoi.mp3', null, 'new', '2019-12-07 10:55:22', '2019-12-07 10:55:22');
INSERT INTO `chapters` VALUES ('320', '', '23', '13', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0013-dot-phat-linh-cam.mp3', null, null, '2019-12-07 10:55:27', '2019-12-07 10:55:27');
INSERT INTO `chapters` VALUES ('321', '', '23', '12', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0012-hoang-hau-2.mp3', null, null, '2019-12-07 10:55:33', '2019-12-07 10:55:33');
INSERT INTO `chapters` VALUES ('322', '', '23', '11', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0011-hoang-hau-1.mp3', null, null, '2019-12-07 10:55:44', '2019-12-07 10:55:44');
INSERT INTO `chapters` VALUES ('323', '', '23', '10', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0010-cung-tac-bien-bien-tac-thong.mp3', null, null, '2019-12-07 10:55:59', '2019-12-07 10:55:59');
INSERT INTO `chapters` VALUES ('324', '', '23', '9', 'public/uploads/audios/cuc-pham-de-vuong-0009.mp3', null, null, '2019-12-07 10:56:09', '2019-12-07 10:56:09');
INSERT INTO `chapters` VALUES ('325', '', '23', '8', 'public/uploads/audios/cuc-pham-de-vuong-0008.mp3', null, null, '2019-12-07 10:56:15', '2019-12-07 10:56:15');
INSERT INTO `chapters` VALUES ('326', '', '23', '7', 'public/uploads/audios/cuc-pham-de-vuong-0007.mp3', null, null, '2019-12-07 10:56:21', '2019-12-07 10:56:21');
INSERT INTO `chapters` VALUES ('327', '', '23', '6', 'public/uploads/audios/cuc-pham-de-vuong-0006.mp3', null, null, '2019-12-07 10:56:25', '2019-12-07 10:56:25');
INSERT INTO `chapters` VALUES ('328', '', '23', '5', 'public/uploads/audios/cuc-pham-de-vuong-0005.mp3', null, null, '2019-12-07 10:56:29', '2019-12-07 10:56:29');
INSERT INTO `chapters` VALUES ('329', '', '23', '4', 'public/uploads/audios/cuc-pham-de-vuong-0004.mp3', null, null, '2019-12-07 10:56:31', '2019-12-07 10:56:31');
INSERT INTO `chapters` VALUES ('330', '', '23', '3', 'public/uploads/audios/cuc-pham-de-vuong-0003.mp3', null, null, '2019-12-07 10:56:34', '2019-12-07 10:56:34');
INSERT INTO `chapters` VALUES ('331', '', '23', '2', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0002-hoang-thuong-khong-de-lam.mp3', null, null, '2019-12-07 10:56:39', '2019-12-07 10:56:39');
INSERT INTO `chapters` VALUES ('332', '', '23', '1', 'public/uploads/audios/cuc-pham-de-vuong-chuong-0001-vuot-qua-bi-danh.mp3', null, '', '2019-12-07 10:56:45', '2019-12-07 10:56:45');
INSERT INTO `chapters` VALUES ('333', 'Thu nạp long người', '12', '15', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0015-Đệ-mười-lăm-chương-Thu-nạp-lòng-người.mp3', null, 'new', '2019-12-07 10:57:12', '2019-12-07 10:57:12');
INSERT INTO `chapters` VALUES ('334', '', '12', '14', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0014-Đệ-mười-bốn-chương-Theo-ta-chơi-tâm-cơ.mp3', null, null, '2019-12-07 10:57:24', '2019-12-07 10:57:24');
INSERT INTO `chapters` VALUES ('335', '', '12', '13', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0013-Đệ-mười-ba-chương-Không-có-kiếm-thắng-có-kiếm.mp3', null, null, '2019-12-07 10:57:34', '2019-12-07 10:57:34');
INSERT INTO `chapters` VALUES ('336', '', '12', '12', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0012-Đệ-mười-hai-chương-Hào-khí-cá-cược.mp3', null, null, '2019-12-07 10:57:40', '2019-12-07 10:57:40');
INSERT INTO `chapters` VALUES ('337', '', '12', '11', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0011-Đệ-mười-một-chương-Oán-phụ-lý-thanh-la.mp3', null, null, '2019-12-07 10:57:45', '2019-12-07 10:57:45');
INSERT INTO `chapters` VALUES ('338', '', '12', '10', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+chương-0010.mp3', null, null, '2019-12-07 10:57:51', '2019-12-07 10:57:51');
INSERT INTO `chapters` VALUES ('339', '', '12', '9', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0009-Âm-Dương-điều-hòa.mp3', null, null, '2019-12-07 10:57:56', '2019-12-07 10:57:56');
INSERT INTO `chapters` VALUES ('340', '', '12', '8', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0008-Vô-thượng-thánh-điển.mp3', null, null, '2019-12-07 10:58:01', '2019-12-07 10:58:01');
INSERT INTO `chapters` VALUES ('341', '', '12', '7', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0007-Tiêu-hồn-thực-cốt.mp3', null, null, '2019-12-07 10:58:06', '2019-12-07 10:58:06');
INSERT INTO `chapters` VALUES ('342', '', '12', '6', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0006-Lang-hoàn-phúc-địa.mp3', null, null, '2019-12-07 10:58:13', '2019-12-07 10:58:13');
INSERT INTO `chapters` VALUES ('343', '', '12', '5', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0005-Đấu-chuyển-tinh-di.mp3', null, null, '2019-12-07 10:58:20', '2019-12-07 10:58:20');
INSERT INTO `chapters` VALUES ('344', '', '12', '4', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0004-Bái-sư-Vô-Nhai-tử.mp3', null, null, '2019-12-07 10:58:26', '2019-12-07 10:58:26');
INSERT INTO `chapters` VALUES ('345', '', '12', '3', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0003-Thần-công-tới-tay.mp3', null, null, '2019-12-07 10:58:31', '2019-12-07 10:58:31');
INSERT INTO `chapters` VALUES ('346', '', '12', '2', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0002-Cô-Tô-Mộ-Dung.mp3', null, null, '2019-12-07 10:58:37', '2019-12-07 10:58:37');
INSERT INTO `chapters` VALUES ('347', '', '12', '1', 'public/uploads/audios/cuc-pham-cuop-doat-he-thong+Chương-0001-Cực-phẩm-cướp-đoạt-hệ-thống.mp3', null, '', '2019-12-07 10:58:42', '2019-12-07 10:58:42');
INSERT INTO `chapters` VALUES ('348', '', '5', '15', 'public/uploads/audios/boss-la-nu-phu-chuong-0015-thien-kim-hao-mon-15.mp3', null, 'new', '2019-12-07 10:59:25', '2019-12-07 10:59:25');
INSERT INTO `chapters` VALUES ('349', '', '5', '14', 'public/uploads/audios/boss-la-nu-phu-chuong-0014-thien-kim-hao-mon-14.mp3', null, null, '2019-12-07 10:59:30', '2019-12-07 10:59:30');
INSERT INTO `chapters` VALUES ('350', '', '5', '13', 'public/uploads/audios/boss-la-nu-phu-chuong-0013-thien-kim-hao-mon-13.mp3', null, null, '2019-12-07 10:59:36', '2019-12-07 10:59:36');
INSERT INTO `chapters` VALUES ('351', '', '5', '12', 'public/uploads/audios/boss-la-nu-phu-chuong-0012-thien-kim-hao-mon-12.mp3', null, null, '2019-12-07 10:59:41', '2019-12-07 10:59:41');
INSERT INTO `chapters` VALUES ('352', '', '5', '11', 'public/uploads/audios/boss-la-nu-phu-chuong-0011-thien-kim-hao-mon-11.mp3', null, null, '2019-12-07 10:59:46', '2019-12-07 10:59:46');
INSERT INTO `chapters` VALUES ('353', '', '5', '10', 'public/uploads/audios/boss-la-nu-phu-chuong-0010-thien-kim-hao-mon-1.mp3', null, null, '2019-12-07 10:59:51', '2019-12-07 10:59:51');
INSERT INTO `chapters` VALUES ('354', '', '5', '9', 'public/uploads/audios/boss-la-nu-phu-chuong-0009-thien-kim-hao-mon-9.mp3', null, null, '2019-12-07 10:59:59', '2019-12-07 10:59:59');
INSERT INTO `chapters` VALUES ('355', '', '5', '8', 'public/uploads/audios/boss-la-nu-phu-chuong-0008-thien-kim-hao-mon-8.mp3', null, null, '2019-12-07 11:00:04', '2019-12-07 11:00:04');
INSERT INTO `chapters` VALUES ('356', '', '5', '7', 'public/uploads/audios/boss-la-nu-phu-chuong-0007-thien-kim-hao-mon-7.mp3', null, null, '2019-12-07 11:00:09', '2019-12-07 11:00:09');
INSERT INTO `chapters` VALUES ('357', '', '5', '6', 'public/uploads/audios/boss-la-nu-phu-chuong-0006-thien-kim-hao-mon-6.mp3', null, null, '2019-12-07 11:00:14', '2019-12-07 11:00:14');
INSERT INTO `chapters` VALUES ('358', '', '5', '5', 'public/uploads/audios/boss-la-nu-phu-chuong-0005-thien-kim-hao-mon-5.mp3', null, null, '2019-12-07 11:00:21', '2019-12-07 11:00:21');
INSERT INTO `chapters` VALUES ('359', '', '5', '4', 'public/uploads/audios/boss-la-nu-phu-chuong-0004-thien-kim-hao-mon-4.mp3', null, null, '2019-12-07 11:00:26', '2019-12-07 11:00:26');
INSERT INTO `chapters` VALUES ('360', '', '5', '3', 'public/uploads/audios/boss-la-nu-phu-chuong-0003-thien-kim-hao-mon-3.mp3', null, null, '2019-12-07 11:00:33', '2019-12-07 11:00:33');
INSERT INTO `chapters` VALUES ('361', '', '5', '2', 'public/uploads/audios/boss-la-nu-phu-chuong-0002-thien-kim-hao-mon-2.mp3', null, null, '2019-12-07 11:00:37', '2019-12-07 11:00:37');
INSERT INTO `chapters` VALUES ('362', '', '5', '1', 'public/uploads/audios/boss-la-nu-phu-chuong-0001-thien-kim-hao-mon-1.mp3', null, null, '2019-12-07 11:00:43', '2019-12-07 11:00:43');
INSERT INTO `chapters` VALUES ('363', 'Trao đổi tim cẩu huyển 7', '25', '15', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0015-Trao-đổi-tim-cẩu-huyết-7.mp3', null, 'new', '2019-12-07 11:00:51', '2019-12-07 11:00:51');
INSERT INTO `chapters` VALUES ('364', '', '25', '14', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0014-Trao-đổi-tim-cẩu-huyết-7.mp3', null, null, '2019-12-07 11:00:57', '2019-12-07 11:00:57');
INSERT INTO `chapters` VALUES ('365', '', '25', '3', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0013-Trao-đổi-tim-cẩu-huyết-5.mp3', null, null, '2019-12-07 11:01:24', '2019-12-07 11:01:24');
INSERT INTO `chapters` VALUES ('366', '', '25', '2', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0012-Trao-đổi-tim-cẩu-huyết-4.mp3', null, null, '2019-12-07 11:01:44', '2019-12-07 11:01:44');
INSERT INTO `chapters` VALUES ('367', '', '25', '11', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0011-Trao-đổi-tim-cẩu-huyết-3.mp3', null, null, '2019-12-07 11:01:55', '2019-12-07 11:01:55');
INSERT INTO `chapters` VALUES ('368', '', '25', '10', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0010-Trao-đổi-tim-cẩu-huyết-2.mp3', null, null, '2019-12-07 11:02:47', '2019-12-07 11:02:47');
INSERT INTO `chapters` VALUES ('369', '', '25', '9', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0009-Trao-đổi-tim-cẩu-huyết-1.mp3', null, null, '2019-12-07 11:04:23', '2019-12-07 11:04:23');
INSERT INTO `chapters` VALUES ('370', '', '25', '8', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0008-Câu-chuyện-thế-giới-cha-con-kết.mp3', null, null, '2019-12-07 11:04:51', '2019-12-07 11:04:51');
INSERT INTO `chapters` VALUES ('371', '', '25', '7', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0007-Câu-chuyện-thế-giới-cha-con-7.mp3', null, null, '2019-12-07 11:05:01', '2019-12-07 11:05:01');
INSERT INTO `chapters` VALUES ('372', '', '25', '6', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0006-Câu-chuyện-thế-giới-cha-con-6.mp3', null, null, '2019-12-07 11:05:08', '2019-12-07 11:05:08');
INSERT INTO `chapters` VALUES ('373', '', '25', '5', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0005-Câu-chuyện-thế-giới-cha-con-5.mp3', null, null, '2019-12-07 11:05:21', '2019-12-07 11:05:21');
INSERT INTO `chapters` VALUES ('374', '', '25', '4', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0004-Câu-chuyện-thế-giới-cha-con-4.mp3', null, null, '2019-12-07 11:05:39', '2019-12-07 11:05:39');
INSERT INTO `chapters` VALUES ('375', '', '25', '3', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0003-Câu-chuyện-thế-giới-cha-con-3.mp3', null, null, '2019-12-07 11:05:47', '2019-12-07 11:05:47');
INSERT INTO `chapters` VALUES ('376', '', '25', '2', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0002-Câu-chuyện-thế-giới-cha-con-2.mp3', null, null, '2019-12-07 11:05:55', '2019-12-07 11:05:55');
INSERT INTO `chapters` VALUES ('377', '', '25', '1', 'public/uploads/audios/bia-do-dan-phan-cong-Chương-0001-Câu-chuyện-thế-giới-cha-con-1.mp3', null, null, '2019-12-07 11:06:03', '2019-12-07 11:06:03');
INSERT INTO `chapters` VALUES ('378', 'Mẹ con ăn xin', '11', '15', 'public/uploads/audios/bac-tong-phong-luu+Chương-0015-Mẹ-con-ăn-xin.mp3', null, 'new', '2019-12-07 11:06:48', '2019-12-07 11:06:48');
INSERT INTO `chapters` VALUES ('379', '', '11', '14', 'public/uploads/audios/bac-tong-phong-luu+Chương-0014-Bát-quái-và-thần-tượng.mp3', null, null, '2019-12-07 11:07:02', '2019-12-07 11:07:02');
INSERT INTO `chapters` VALUES ('380', '', '11', '13', 'public/uploads/audios/bac-tong-phong-luu+Chương-0013-Câu-đối.mp3', null, null, '2019-12-07 11:07:18', '2019-12-07 11:07:18');
INSERT INTO `chapters` VALUES ('381', '', '11', '12', 'public/uploads/audios/bac-tong-phong-luu+Chương-0012-Bánh-nướng-p2.mp3', null, null, '2019-12-07 11:07:32', '2019-12-07 11:07:32');
INSERT INTO `chapters` VALUES ('382', '', '11', '11', 'public/uploads/audios/bac-tong-phong-luu+Chương-0011-Bánh-nướng-p1.mp3', null, null, '2019-12-07 11:07:45', '2019-12-07 11:07:45');
INSERT INTO `chapters` VALUES ('383', '', '11', '10', 'public/uploads/audios/bac-tong-phong-luu+Chương-0010-Bán-quán.mp3', null, null, '2019-12-07 11:07:55', '2019-12-07 11:07:55');
INSERT INTO `chapters` VALUES ('384', '', '11', '9', 'public/uploads/audios/bac-tong-phong-luu+Chương-0009-Chuyện-vặt-2.mp3', null, null, '2019-12-07 11:08:07', '2019-12-07 11:08:07');
INSERT INTO `chapters` VALUES ('385', '', '11', '8', 'public/uploads/audios/bac-tong-phong-luu+Chương-0008-Chuyện-vặt-p1.mp3', null, null, '2019-12-07 11:08:18', '2019-12-07 11:08:18');
INSERT INTO `chapters` VALUES ('386', '', '11', '7', 'public/uploads/audios/bac-tong-phong-luu+Chương-0007-Công-tử-áo-tim.mp3', null, null, '2019-12-07 11:08:33', '2019-12-07 11:08:33');
INSERT INTO `chapters` VALUES ('387', '', '11', '6', 'public/uploads/audios/bac-tong-phong-luu+Chương-0006-Lời-nói-dối-kinh-điển.mp3', null, null, '2019-12-07 11:08:42', '2019-12-07 11:08:42');
INSERT INTO `chapters` VALUES ('388', '', '11', '5', 'public/uploads/audios/bac-tong-phong-luu+Chương-0005-Ôm-thuyền-khiết.mp3', null, null, '2019-12-07 11:08:52', '2019-12-07 11:08:52');
INSERT INTO `chapters` VALUES ('389', '', '11', '4', 'public/uploads/audios/bac-tong-phong-luu+Chương-0004-Cúc-hoa-tàn.mp3', null, null, '2019-12-07 11:09:26', '2019-12-07 11:09:26');
INSERT INTO `chapters` VALUES ('390', '', '11', '3', 'public/uploads/audios/bac-tong-phong-luu+Chương-0003-Người-say-3.mp3', null, null, '2019-12-07 11:09:42', '2019-12-07 11:09:42');
INSERT INTO `chapters` VALUES ('391', '', '11', '2', 'public/uploads/audios/bac-tong-phong-luu+Chương-0002-Người-say-2.mp3', null, null, '2019-12-07 11:09:52', '2019-12-07 11:09:52');
INSERT INTO `chapters` VALUES ('392', '', '11', '1', 'public/uploads/audios/bac-tong-phong-luu+Chương-0001-Người-say-1.mp3', null, null, '2019-12-07 11:10:03', '2019-12-07 11:10:03');
INSERT INTO `chapters` VALUES ('393', 'Chiếc giày', '28', '16', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0016-Chiếc-giày.mp3', null, 'new', '2019-12-07 11:10:32', '2019-12-07 11:10:32');
INSERT INTO `chapters` VALUES ('394', '', '28', '9', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0009-Hành-động-lại-mặt.mp3', null, null, '2019-12-07 11:10:40', '2019-12-07 11:10:40');
INSERT INTO `chapters` VALUES ('395', '', '28', '15', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0015-Đêm-chạy-trốn.mp3', null, null, '2019-12-07 11:11:04', '2019-12-07 11:11:04');
INSERT INTO `chapters` VALUES ('396', '', '28', '14', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0014-Hoàng-cung-4.mp3', null, null, '2019-12-07 11:11:10', '2019-12-07 11:11:10');
INSERT INTO `chapters` VALUES ('397', '', '28', '13', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0013-Hoàng-cung-3.mp3', null, null, '2019-12-07 11:11:16', '2019-12-07 11:11:16');
INSERT INTO `chapters` VALUES ('398', '', '28', '12', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0012-Hoàng-cung-2.mp3', null, null, '2019-12-07 11:11:22', '2019-12-07 11:11:22');
INSERT INTO `chapters` VALUES ('399', '', '28', '11', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0011-Hoàng-cung.mp3', null, null, '2019-12-07 11:11:28', '2019-12-07 11:11:28');
INSERT INTO `chapters` VALUES ('400', '', '28', '10', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0010-Hoàng-tử-và-phần-ăn-gia-đình.mp3', null, null, '2019-12-07 11:11:34', '2019-12-07 11:11:34');
INSERT INTO `chapters` VALUES ('401', '', '28', '9', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0008-Bữa-ăn-sáng.mp3', null, null, '2019-12-07 11:11:40', '2019-12-07 11:11:40');
INSERT INTO `chapters` VALUES ('402', '', '28', '8', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0007-Đêm-ấy.mp3', null, null, '2019-12-07 11:11:45', '2019-12-07 11:11:45');
INSERT INTO `chapters` VALUES ('403', '', '28', '5', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0005-Hôn-lễ-cổ-tích.mp3', null, null, '2019-12-07 11:11:52', '2019-12-07 11:11:52');
INSERT INTO `chapters` VALUES ('404', '', '28', '4', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0004-Thư-tình.mp3', null, null, '2019-12-07 11:12:03', '2019-12-07 11:12:03');
INSERT INTO `chapters` VALUES ('405', '', '28', '3', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0003-Người-định-mệnh.mp3', null, null, '2019-12-07 11:12:09', '2019-12-07 11:12:09');
INSERT INTO `chapters` VALUES ('406', '', '28', '2', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0002-Lễ-chiếm-đóng.mp3', null, null, '2019-12-07 11:12:14', '2019-12-07 11:12:14');
INSERT INTO `chapters` VALUES ('407', '', '28', '1', 'public/uploads/audios/anh-den-tu-sao-hoa-Chương-0001-Địa-cầu-bị-tiêu-diệt-vào-ngày-cá-tháng-tư.mp3', null, null, '2019-12-07 11:12:21', '2019-12-07 11:12:21');

-- ----------------------------
-- Table structure for sequelizemeta
-- ----------------------------
DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of sequelizemeta
-- ----------------------------
INSERT INTO `sequelizemeta` VALUES ('20190914025127-create-user.js');
INSERT INTO `sequelizemeta` VALUES ('20191205060327-create-category.js');
INSERT INTO `sequelizemeta` VALUES ('20191205070232-create-story.js');
INSERT INTO `sequelizemeta` VALUES ('20191205071531-create-chapter.js');

-- ----------------------------
-- Table structure for stories
-- ----------------------------
DROP TABLE IF EXISTS `stories`;
CREATE TABLE `stories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `slugName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `imgUrl` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imgThumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalChapter` int(11) DEFAULT NULL,
  `view` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of stories
-- ----------------------------
INSERT INTO `stories` VALUES ('1', 'Linh Vũ Thiên Hạ', 'linh-vu-thien-ha', 'Vũ Phong', '1', 'public/uploads/images/cover_linh_vu_thien_ha.jpg', 'public/uploads/thumbs/cover_thumb_linh_vu_thien_ha.jpg', '15', '1', '1', '2019-12-06 06:24:16', '2019-12-06 06:24:16');
INSERT INTO `stories` VALUES ('2', 'Vũ Luyện Điên Phong', 'vu-luyen-dien-phong', 'Mạc Mặc', '2', 'public/uploads/images/cover_vu_luyen_dien_phong.jpg', 'public/uploads/thumbs/cover_thumb_vu_luyen_dien_phong.jpg', '15', '2', '1', '2019-12-06 07:17:02', '2019-12-06 07:17:02');
INSERT INTO `stories` VALUES ('3', 'Thiếu Gia Bị Bỏ Rơi', 'thieu-gia-bi-bo-roi', 'Ta Là Lão Ngũ', '3', 'public/uploads/images/cover_thieu_gia_bi_bo_roi.jpg', 'public/uploads/thumbs/cover_thumb_thieu_bi_bo_roi.jpg', '14', '3', '1', '2019-12-06 07:20:23', '2019-12-06 07:20:23');
INSERT INTO `stories` VALUES ('4', 'Độc Tôn Tam Giới', 'doc-ton-tam-gioi', 'Lê Thiên', '4', 'public/uploads/images/cover_doc_ton_tam_gioi.jpg', 'public/uploads/thumbs/cover_thumb_doc_ton_tam_gioi.jpg', '15', '4', '1', '2019-12-06 07:22:32', '2019-12-06 07:22:32');
INSERT INTO `stories` VALUES ('5', 'Boss Là Nữ Phụ', 'boss-la-nu-phu', 'Mặc Linh', '5', 'public/uploads/images/cover_boss_la_nu_phu.jpg', 'public/uploads/thumbs/cover_thumb_boss_la_nu_phu.jpg', '15', '5', '1', '2019-12-06 07:26:04', '2019-12-06 07:26:04');
INSERT INTO `stories` VALUES ('6', 'Mao Sơn Tróc Quỷ Nhân', 'mao-son-troc-quy-nhan', 'Thanh tử', '6', 'public/uploads/images/cover_mao_son_troc_quy_nhan.jpg', 'public/uploads/thumbs/cover_thumb_mao_son_troc_quy_nhan.jpg', '15', '6', '1', '2019-12-06 07:29:19', '2019-12-06 07:29:19');
INSERT INTO `stories` VALUES ('7', 'Toàn Chức Cao Thủ', 'toan-chuc-cao-thu', 'Hồ Hiệp Lam', '7', 'public/uploads/images/cover_toan_chuc_cao_thu.jpg', 'public/uploads/thumbs/cover_thumb_toan_chuc_cao_thu.jpg', '15', '7', '1', '2019-12-06 07:31:45', '2019-12-06 07:31:45');
INSERT INTO `stories` VALUES ('8', 'Đại Chúa Tể', 'dai-chua-te', 'Thiên Tàm Thổ Đậu', '8', 'public/uploads/images/cover_dai_chua_te.jpg', 'public/uploads/thumbs/cover_thumb_dai_chu_te.jpg', '15', '8', '1', '2019-12-06 07:34:15', '2019-12-06 07:34:15');
INSERT INTO `stories` VALUES ('9', 'Tối Cường Thăng Cấp Hệ Thống', 'toi-cuong-thang-cap-he-thong', 'Đại Hải Thật Nhiều Nước', '9', 'public/uploads/images/cover_toi_cuong_thang_cap_he_thong.jpg', 'public/uploads/thumbs/cover_thumb_toi_cuong_thang_cap_he_thong.jpg', '15', '9', '1', '2019-12-06 07:37:17', '2019-12-06 07:37:17');
INSERT INTO `stories` VALUES ('10', 'Đường Chuyên', 'duong-chuyen', 'Kiết Dữ 2', '10', 'public/uploads/images/cover_duong_chuyen.jpg', 'public/uploads/thumbs/cover_thumb_duong_chuyen.jpg', '15', '10', '1', '2019-12-06 07:39:06', '2019-12-06 07:39:06');
INSERT INTO `stories` VALUES ('11', 'Bắc Tống Phong Lưu', 'bac-tong-phong-luu', 'Nam Hi', '11', 'public/uploads/images/cover_bac_tong_phong_luu.jpg', 'public/uploads/thumbs/cover_thumb_bac_tong_phong_luu.jpg', '15', '11', '1', '2019-12-06 07:40:51', '2019-12-06 07:40:51');
INSERT INTO `stories` VALUES ('12', 'Cực Phẩm Cượp Đoạt Hệ Thống', 'cuc-pham-cuop-doat-he-thong', 'Hải Lý Dương', '12', 'public/uploads/images/cover_cuc_pham_cuop_doat_he_thong.jpg', 'public/uploads/thumbs/cover_thumb_cuc_pham_cuop_doat_he_thong.jpg', '15', '12', '1', '2019-12-06 07:42:12', '2019-12-06 07:42:12');
INSERT INTO `stories` VALUES ('13', 'Say Mộng Giang Sơn', 'say-mong-giang-son', 'Nguyệt Quan', '13', 'public/uploads/images/cover_say_mong_giang_son.jpg', 'public/uploads/thumbs/cover_thumb_say_mong_giang_son.jpg', '14', '13', '1', '2019-12-06 07:43:26', '2019-12-06 07:43:26');
INSERT INTO `stories` VALUES ('14', 'Kiều Thê Như Vân', 'kieu-the-nhu-van', 'Thượng Sơn Đả Lão Hổ', '14', 'public/uploads/images/cover_kieu_the_nhu_van.jpg', 'public/uploads/thumbs/cover_thumb_kieu_the_nhu_van.jpg', '15', '14', '1', '2019-12-06 07:50:41', '2019-12-06 07:50:41');
INSERT INTO `stories` VALUES ('15', 'Tào Tặc', 'tao-tac', 'Canh Tân', '15', 'public/uploads/images/cover_tao_tac.jpg', 'public/uploads/thumbs/cover_thumb_tao_tac.jpg', '15', '15', '1', '2019-12-06 07:51:44', '2019-12-06 07:51:44');
INSERT INTO `stories` VALUES ('16', 'Thịnh Thế Đích Phi', 'thinh-the-dich-phi', 'Phượng Kinh', '16', 'public/uploads/images/cover_thinh_the_dich_phi.jpg', 'public/uploads/thumbs/cover_thumb_thinh_the_dich_phi.jpg', '15', '16', '1', '2019-12-06 07:52:55', '2019-12-06 07:52:55');
INSERT INTO `stories` VALUES ('17', 'Thiên Tài Tiểu Vương Phi', 'thien-tai-tieu-vuong-phi', 'Vệ Sơ Lãng', '17', 'public/uploads/images/cover_thien_tai_tieu_vuong_phi.jpg', 'public/uploads/thumbs/cover_thumb_thien_tai_tieu_vuong_phi.jpg', '15', '17', '1', '2019-12-06 07:54:17', '2019-12-06 07:54:17');
INSERT INTO `stories` VALUES ('18', 'Ngược Về Thời Minh', 'nguoc-ve-thoi-minh', 'Nguyệt Quan', '18', 'public/uploads/images/cover_nguoc_ve_thoi_minh.jpg', 'public/uploads/thumbs/cover_thumb_nguoc_ve_thoi_minh.jpg', '15', '18', '1', '2019-12-06 07:56:31', '2019-12-06 07:56:31');
INSERT INTO `stories` VALUES ('19', 'Trí Tuệ Đại Tống', 'tri-tue-dai-tong', 'Kiết Dữ 2', '19', 'public/uploads/images/cover_tri_tue_dai_tong.jpg', 'public/uploads/thumbs/cover_thumb_tri_tue_dai_tong.jpg', '14', '19', '1', '2019-12-06 07:57:31', '2019-12-06 07:57:31');
INSERT INTO `stories` VALUES ('20', 'Gia Cát Linh Ẩn', 'gia-cat-linh-an', 'Cửu Dã Thần Tây', '20', 'public/uploads/images/cover_gia_cat_linh_an.jpg', 'public/uploads/thumbs/cover_thumb_gia_cat_linh_an.jpg', '15', '20', '1', '2019-12-06 08:02:40', '2019-12-06 08:02:40');
INSERT INTO `stories` VALUES ('21', 'Đại Đường Song Long Truyện', 'dai-duong-song-long-truyen', 'Huỳnh Dị', '21', 'public/uploads/images/cover_dai_duong_song_long_truyen.jpg', 'public/uploads/thumbs/cover_thumb_dai_duong_song_long_truyen.jpg', '15', '21', '1', '2019-12-06 08:03:58', '2019-12-06 08:03:58');
INSERT INTO `stories` VALUES ('22', 'Tranh Bá Thiên Hạ', 'tranh-ba-thien-ha', 'Trí Bạch', '22', 'public/uploads/images/cover_tranh_ba_thien_ha.jpg', 'public/uploads/thumbs/cover_thumb_tranh_ba_thien_ha.jpg', '15', '22', '1', '2019-12-06 08:06:15', '2019-12-06 08:06:15');
INSERT INTO `stories` VALUES ('23', 'Cực Phẩm Đế Vương', 'cuc-pham-de-vuong', 'Binh Hồn', '23', 'public/uploads/images/cover_cuc_pham_de_vuong.jpg', 'public/uploads/thumbs/cover_thumb_cuc_pham_de_vuong.jpg', '14', '23', '1', '2019-12-06 08:08:50', '2019-12-06 08:08:50');
INSERT INTO `stories` VALUES ('24', 'Cưng Chiều Thất Hoàng Phi', 'cung-chieu-that-hoang-phi', 'Lâu Tinh Ngâm Loại', '24', 'public/uploads/images/cover_cung_chieu_that_hoang_phi.jpg', 'public/uploads/thumbs/cover_thumb_cung_chieu_that_hoang_phi.jpg', '15', '24', '1', '2019-12-06 08:10:09', '2019-12-06 08:10:09');
INSERT INTO `stories` VALUES ('25', 'Bia Đỡ Đạn Phản Công', 'bia-do-dan-phan-cong', 'Hoàn Nhĩ WR', '25', 'public/uploads/images/cover_bia_do_dan_phan_cong.jpg', 'public/uploads/thumbs/cover_thumb_bia_do_dan_phan_cong.jpg', '15', '25', '1', '2019-12-06 08:12:34', '2019-12-06 08:12:34');
INSERT INTO `stories` VALUES ('26', 'Siêu Cấp Hoàng Kim Thủ', 'sieu-cap-hoang-kim-thu', 'Tiểu Tiểu Vũ', '26', 'public/uploads/images/cover_sieu_cap_hoang_kim_thu.jpg', 'public/uploads/thumbs/cover_thumb_sieu_cap_hoang_kim_thu.jpg', '14', '26', '1', '2019-12-06 08:13:38', '2019-12-06 08:13:38');
INSERT INTO `stories` VALUES ('27', 'Thanh Kiếm Cực Đoan', 'thanh-kiem-cuc-doan', 'Nửa Bước Thăng Trầm', '27', 'public/uploads/images/cover_than_kiem_cuc_doan.jpg', 'public/uploads/thumbs/cover_thumb_than_kiem_cuc_doan.jpg', '6', '27', '1', '2019-12-06 08:16:31', '2019-12-06 08:16:31');
INSERT INTO `stories` VALUES ('28', 'Anh Đến Từ Sao Hỏa', 'anh-den-tu-sao-hoa', 'Phạn Tạp', '28', 'public/uploads/images/cover_anh_den_tu_sao_hoa.jpg', 'public/uploads/thumbs/cover_thumb_anh_den_tu_sao_hoa.jpg', '15', '28', '1', '2019-12-06 08:17:28', '2019-12-06 08:17:28');
INSERT INTO `stories` VALUES ('29', 'Phương Trình Nano', 'phuong-trinh-nano', 'Bạch Dạ Mộ Thần', '29', 'public/uploads/images/cover_phuong_trinh_nano.jpg', 'public/uploads/thumbs/cover_thumb_phuong_trinh_nano.jpg', '0', '0', '0', '2019-12-06 08:21:17', '2019-12-06 08:21:17');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `firstName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `gender` int(11) DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
