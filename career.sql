SET NAMES UTF8;
DROP  DATABASE  IF  EXISTS  career;#丢弃 
CREATE DATABASE career CHARSET=UTF8;
USE iumper;
#1用户基本信息
CREATE TABLE career_user(uid INT PRIMARY KEY AUTO_INCREMENT,
                         uname VARCHAR(36),       #账号
			 password VARCHAR(36),	  #密码
			 nickname VARCHAR(36),    #昵称
                         sex INT,                 #性别
			 age INT,                 #年龄
                         phone VARCHAR(50),	  #电话
                         email VARCHAR(50)        #邮箱			 
			 education VARCHAR(50)    #学历
			 station VARCHAR(50)	  #求职岗位
			 reachtion VARCHAR(50)    #到岗时间
);
#2工作经历   
CREATE TABLE career_experience(eid INT PRIMARY KEY AUTO_INCREMENT,
			       uid VARCHAR(36),  #用户id
                               FOREIGN KEY (uid) REFERENCES career_user(uid),
			       #公司名称. 
			       #部门 
			       #职责 

);

#3发布信息
