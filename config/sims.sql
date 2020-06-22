/*
 Navicat Premium Data Transfer

 Source Server         : ks
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : sims

 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001

 Date: 19/06/2020 13:58:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_class_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_class_info`;
CREATE TABLE `tb_class_info`  (
  `classid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '班级',
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '专业',
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学院',
  PRIMARY KEY (`classid`, `subject`, `college`) USING BTREE,
  UNIQUE INDEX `classid`(`classid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_class_info
-- ----------------------------
INSERT INTO `tb_class_info` VALUES ('电子1701', '电子工程专业', '通信学院');
INSERT INTO `tb_class_info` VALUES ('网工1701', '网络专业专业', '计算机学院');
INSERT INTO `tb_class_info` VALUES ('计科1701', '计算机科学与技术专业', '计算机学院');
INSERT INTO `tb_class_info` VALUES ('计科1702', '计算机科学与技术专业', '计算机学院');
INSERT INTO `tb_class_info` VALUES ('软工1701', '软件工程专业', '计算机学院');
INSERT INTO `tb_class_info` VALUES ('通信1701', '通信工程专业', '通信学院');
INSERT INTO `tb_class_info` VALUES ('通信1702', '通信工程专业', '通信学院');

-- ----------------------------
-- Table structure for tb_courses_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_courses_info`;
CREATE TABLE `tb_courses_info`  (
  `course_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '课程编号',
  `course_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '课程名称',
  `tea_username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '授课教师工号',
  `tea_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '授课教师姓名',
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '专业',
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学院',
  PRIMARY KEY (`course_id`, `course_name`, `tea_username`) USING BTREE,
  UNIQUE INDEX `course_id`(`course_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_courses_info
-- ----------------------------
INSERT INTO `tb_courses_info` VALUES ('1', '软件工程', 'j1', '软工', '软件工程专业', '计算机学院');
INSERT INTO `tb_courses_info` VALUES ('2', '网络工程', 'j3', '网工', '网络工程专业', '计算机学院');
INSERT INTO `tb_courses_info` VALUES ('3', '计算机组成原理', 'j2', '计科', '计算机科学与技术专业', '计算机学院');
INSERT INTO `tb_courses_info` VALUES ('4', '通信1', 't1', '通信', '通信工程专业', '通信学院');
INSERT INTO `tb_courses_info` VALUES ('5', '电子1', 't2', '电工', '电子工程专业', '通信学院');
INSERT INTO `tb_courses_info` VALUES ('6', '数据结构', 'j1', '软工', '软件工程专业', '计算机学院');

-- ----------------------------
-- Table structure for tb_score_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_score_info`;
CREATE TABLE `tb_score_info`  (
  `stu_username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学号',
  `course_id` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '课程编号',
  `score` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '课程成绩',
  `classid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '班级',
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '专业',
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学院',
  `course_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '课程名称',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学生姓名',
  PRIMARY KEY (`stu_username`, `course_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_score_info
-- ----------------------------
INSERT INTO `tb_score_info` VALUES ('17405070830', '1', '80', '计科1701', '计算机科学与技术专业', '计算机学院', '软件工程', '计科3');
INSERT INTO `tb_score_info` VALUES ('17405070830', '3', '80', '计科1701', '计算机科学与技术专业', '计算机学院', '计算机组成原理', '计科3');
INSERT INTO `tb_score_info` VALUES ('17405070831', '1', '75', '计科1701', '计算机科学与技术专业', '计算机学院', '软件工程', '计科2');
INSERT INTO `tb_score_info` VALUES ('17405070831', '3', '96', '计科1701', '计算机科学与技术专业', '计算机学院', '计算机组成原理', '计科2');
INSERT INTO `tb_score_info` VALUES ('17405070832', '1', '95', '软工1701', '软件工程专业', '计算机学院', '软件工程', '软工1');
INSERT INTO `tb_score_info` VALUES ('17405070832', '6', '82', '软工1701', '软件工程专业', '计算机学院', '数据结构', '软工1');
INSERT INTO `tb_score_info` VALUES ('17405070833', '1', '75', '电子1701', '电子工程专业', '通信学院', '软件工程', '电子1');

-- ----------------------------
-- Table structure for tb_stu_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_stu_info`;
CREATE TABLE `tb_stu_info`  (
  `username` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学号',
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '学院',
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '专业',
  `classid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '班级',
  `sex` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '性别',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '姓名',
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '邮箱',
  `level` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限',
  PRIMARY KEY (`username`, `email`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_stu_info
-- ----------------------------
INSERT INTO `tb_stu_info` VALUES ('17405070830', '计算机学院', '计算机科学与技术专业', '计科1701', '男', '计科3', '4534354354', '3214321@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070831', '计算机学院', '计算机科学与技术专业', '计科1702', '男', '计科2', '1', '4312431@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070832', '计算机学院', '软件工程专业', '软工1701', '女', '软工1', '1', 'zs@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070833', '计算机学院', '网络工程专业', '网工1701', '女', '网工1', '1', 'ls@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070834', '通信学院', '通信工程专业', '通信1701', '男', '张三', '12345678', '12345678@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070835', '通信学院', '电子工程专业', '电子1701', '男', '电子1', '1', '2@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('17405070836', '通信学院', '通信工程专业', '通信1702', '男', '通信2', '11111111111', '1@qq.com', '0');
INSERT INTO `tb_stu_info` VALUES ('2222222222', '计算机学院', '电子工程专业', '电子1701', '男', '2222222222', '2222222222', '222222222222', '0');

-- ----------------------------
-- Table structure for tb_tea_info
-- ----------------------------
DROP TABLE IF EXISTS `tb_tea_info`;
CREATE TABLE `tb_tea_info`  (
  `username` varchar(8) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `subject` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `college` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `level` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`username`, `email`) USING BTREE,
  UNIQUE INDEX `username`(`username`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_tea_info
-- ----------------------------
INSERT INTO `tb_tea_info` VALUES ('', '', '', '@qq.com', NULL, '计算机学院', '1');
INSERT INTO `tb_tea_info` VALUES ('12', '21', '12', '12@qq.com', '电子工程专业', '通信学院', '1');
INSERT INTO `tb_tea_info` VALUES ('7', '7', '7', '7@qq.com', '通信工程专业', '通信学院', '1');
INSERT INTO `tb_tea_info` VALUES ('j1', '软工', '1', '1@qq.com', '软件工程专业', '计算机学院', '1');
INSERT INTO `tb_tea_info` VALUES ('j2', '计科', '2', '2@qq.com', '计算机科学与技术专业', '计算机学院', '1');
INSERT INTO `tb_tea_info` VALUES ('j3', '网工', '3', '3@qq.com', '网络工程专业', '计算机学院', '1');
INSERT INTO `tb_tea_info` VALUES ('t1', '通信', '1', '4@qq.com', '通信工程专业', '通信学院', '1');
INSERT INTO `tb_tea_info` VALUES ('t2', '电工', '2', '5@qq.com', '电子工程专业', '通信学院', '1');

-- ----------------------------
-- Table structure for tb_tea_level
-- ----------------------------
DROP TABLE IF EXISTS `tb_tea_level`;
CREATE TABLE `tb_tea_level`  (
  `level` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限级别',
  `level_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限名称',
  PRIMARY KEY (`level`, `level_name`) USING BTREE,
  UNIQUE INDEX `level`(`level`) USING BTREE,
  UNIQUE INDEX `level_name`(`level_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_tea_level
-- ----------------------------
INSERT INTO `tb_tea_level` VALUES ('0', '用户');
INSERT INTO `tb_tea_level` VALUES ('1', '管理员');

-- ----------------------------
-- Table structure for test
-- ----------------------------
DROP TABLE IF EXISTS `test`;
CREATE TABLE `test`  (
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'name',
  `age` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT 'age',
  PRIMARY KEY (`name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of test
-- ----------------------------
INSERT INTO `test` VALUES ('1', '1');
INSERT INTO `test` VALUES ('10', '10');
INSERT INTO `test` VALUES ('11', '11');
INSERT INTO `test` VALUES ('12', '12');
INSERT INTO `test` VALUES ('2', '2');
INSERT INTO `test` VALUES ('3', '3');
INSERT INTO `test` VALUES ('4', '4');
INSERT INTO `test` VALUES ('5', '5');
INSERT INTO `test` VALUES ('6', '6');
INSERT INTO `test` VALUES ('7', '7');
INSERT INTO `test` VALUES ('8', '8');
INSERT INTO `test` VALUES ('9', '9');

SET FOREIGN_KEY_CHECKS = 1;
