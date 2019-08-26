SET NAMES UTF8;
DROP  DATABASE  IF  EXISTS  career;			#丢弃 
CREATE DATABASE career CHARSET=UTF8;
USE career;
#1用户基本信息
CREATE TABLE career_user(uid INT PRIMARY KEY AUTO_INCREMENT,
                         uname VARCHAR(36),       #账号
			 password VARCHAR(36),	  #密码
			 nickname VARCHAR(36),    #昵称/真实姓名
                         phone VARCHAR(50),	  #电话
			 sex INT,			#性别	  1男/0女
			 age INT,			#年龄
                         email VARCHAR(50),		#邮箱			 
			 education VARCHAR(150),	#学历
			 station VARCHAR(150),		#求职岗位
			 reachtion VARCHAR(150),	#到岗时间
			 marital INT,			#婚姻状态  1已婚/0未婚
			 province VARCHAR(150),		#籍贯-省
			 city	 VARCHAR(150),		#籍贯-市
			 avatar  VARCHAR(10000),	#头像
			 birthdata VARCHAR(50),         #出生日期
			 workdata VARCHAR(50),		#工作日期
			 QQ VARCHAR(50),			#QQ
			 height VARCHAR(50),		#身高
			 xprovince VARCHAR(150),	#现居-省
			 xcity	 VARCHAR(150),		#现居-市			 
			 introduce VARCHAR(150)	        #自我介绍
);
#3公司信息
CREATE TABLE career_company(cid INT PRIMARY KEY AUTO_INCREMENT,
			    title VARCHAR(136),       #标题/需求某项职位
			    time  VARCHAR(136),       #时间/毫秒数/ 8-16 21:07/1565960766904
			    details VARCHAR(336),     #内容
                            salary  VARCHAR(20),      #工资,       
			    cname   VARCHAR(120),     #公司名字
                            pic VARCHAR(150),	      #img图片			 
			    experience VARCHAR(150),  #经验
                            education VARCHAR(50),    #学历
			    linkman VARCHAR(50),      #联系人
			    phone VARCHAR(50),	      #联系方式，邮箱手机
			    province VARCHAR(50),     #省份
			    cantonal VARCHAR(50)      #市区
);
#4职位收藏
CREATE TABLE career_collect(coid INT PRIMARY KEY AUTO_INCREMENT,
			    cid INT,		      #公司id
			    uid INT,		      #用户id
			    title VARCHAR(136),       #标题/需求某项职位
			    salary  VARCHAR(20),      #工资,
			    time  VARCHAR(136),       #时间/毫秒数/ 8-16 21:07/1565960766904
			    cname   VARCHAR(120),     #公司名字
			    experience VARCHAR(150),  #经验
			    education VARCHAR(50),    #学历
			    pic VARCHAR(150),	      #img图片
			    province VARCHAR(50),     #省份
			    cantonal VARCHAR(50)      #市区
);
#1用户基本信息																								
INSERT INTO `career_user`( `uid`, `uname`, `password`, `nickname`, `phone`,`sex`, `age`, `email`, `education`, `station`, `reachtion`,`marital`, `province`, `city`,`avatar`,`birthdata`,`workdata`,`QQ`,`height`,`xprovince`,`xcity`,`introduce`) VALUES (1, 'a111111', 'a111111', 'a111111', '13112345678',1, 18,  '12345678@qq.com', '博士', '前端工程师', '随时', '0', '湖南', '长沙','data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEeklEQVRoQ9Vay3XbOBR9jxa5HaWCuIOxKxi5AisVRKkg8kLA8WqclQ+pheUKRu5AqSByBaPpIFPBeLa2yZdzZUCHoikRH+V4BksbAO/Fw7vvAzEdYNzc3PSfn59/I6ITEXknIn1mfhCRB2zPzH37N2b+h4hWvV7v/uLiYv3/mMGhiwH68fHxnJlPATRJkuVkMlm67DedTgdVVQ0MsT+zLPsaSsabgDntzzhpIporpVYuoHfNKYrihIhGsEyv17v1JeJFIM/zj0R0VlXV1eXl5fcY4M2119fXx0mSXBHRN631neveTgRw6k9PT1fMvHC9Jq4AmvPM9RplWTZ2sUYnAWviNE2vXDYMBV5fZ/xrxsyzriu6l4AFr5QaHwKY7x5FUcy6/GwngbcGb8l2kWglAIc6Ojoav9XJNy0FEmVZztqEo5VAnudzVyfyvRYh861PaK1HzfWvCOR5vlabLucJARKzBldaRAZaa/jFZmwRMJOGWmvo8X9utB3uFgFcnTYz+TKZTqfnIjIkomO7VkSwt3OA2vXNJsYNAQQQETlWSs19AdcUAynGmJk3wBt7Ie34FHM9i6JA2vHdBtQNAXh6jOoURfEHchpH8kul1Jnj3FfT6ljXBGyqEErAWO+bJ6DTUEuAgM0M1gTyPB9XVbUITdBwL5kZiZ7PwFUKuq4mTg2wfk3gANcHdQAKGuchIl9i1M5i/v8TMHk4tH8rQDgf5YsFQyzwQWu98PlOfS5iQpZlM4YD4h8xeX5RFABy7gOGmc9ivmlxc1NXfUDYuSZC/u6z9hAEqqrqszVFTLESokKxTmyu/mhNIEYNjIqJz+mbuSul1GnAus2SteUPZIEVM//qA0ZE/tVa933W1OfWLTBMkuQhxqFCVIiI7pVSawEJGRsnPoQKhTgxEd2Gpi4gvCFgqp1xjB+YXApS6hqN79M0HUYKx0scOEQqgT0MCfQ9O0eapu9iwNcx22QuWol81Egp1dmP6joFq57WAqOyLJeh2aj9WFEUnXIqIn9prdEPDR6vstHYesAnIsdGYHyrLv0bUx4ooKEiQ2W2b6DfdBt8/IaAFZ16SQmznoQWGT5OHGMF5G54ILHVXLOtElwXmxbgZ8eTDa6Jmzdli4ANzz4xodZCcS3oLUfUEIs0Te9cJbWt9G3rzKEtghPa+fJin5eICF28XS0UR2MQ3tLmVVXd7lPBuvLUN27V43rVX59ce15Cuz04EdvDbF6W5Zc2Irvq9lYCzfTCtNpxv9Ft+xnAtziJyCJJkvlkMvnalM0m+c73ARF5z8wA/hZjKSL3+5rNnS80IrJk5l/eAj1qBmZG/2enP3bmJEaZFr4FSyxhpBxVVQ270ptOAgBifAKW8Kq6QkkAfJZlAxd5dSJQI4GXQ98WohcPEbnzeR1yJlBL2IZ4/iSi917Iuif/jda8b7PLm0DNGogFCHpRDg5HJaIZqiuXK+Mso90H9jLDJFeQWa/OHBFB4/EWF9ShtviCLLCLnPmZALJa/Nxmq+MAOSYi/KplFdMBaX77B0kz0ahNkspqAAAAAElFTkSuQmCC','请选择','请选择','','','','','');
#3公司信息
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (1, '促销/导购员', '1565960766904', '接待顾客的咨询，了顾客的需求并达成销售。做好成交客户的客情关系，建立良好的长期合作关系。', '5k-10k', '广东佛山顺德宝马家具有限公司', 'baoma.jpg', '一年以下', '初中', '罗先生', '13523465658', '广东', '佛山');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (2, '家具/家居用品设计', '1565960123456', '熟悉家具设计工艺及软件，对工作负责。\r\n熟悉设计量尺，具有一定沟通能力。\r\n具有两年以上定制家具设计经验。', '2k-5k', '广西桂林城威家具有限公司', 'chengwei.jpg', '1-3年', '高中', '李先生', '13552663258', '广西', '桂林');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (3, '家具销售经理', '1565961896357', '开拓新市场,发展新客户,增加产品销售范围。\r\n负责辖区市场信息的收集及竞争对手的分析。', '10k-15k', '湖南长沙格木家具有限公司', 'gemu.jpg', '3-5年', '中专', '向先生', '13565587458', '湖南', '长沙');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (4, '普工', '1565963548589', '能吃苦耐劳，工作认真负责\r\n年龄40岁以下。男性，包吃住，长白班。', '15k-20k', '湖北武汉恒尚家具有限公司 ', 'heshang.jpg', '5-10年', '大专', '陶先生', '116546554@qq.com', '湖北', '武汉');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (5, '店长/卖场经理', '1565962356256', '1、销售能力强，有目标感，有狼性！有家具销售经验优先，底薪5000元起步2、良好的学习能力和上进之心。3、爱好家居美学，居家花艺，茶艺等。4、能够领导团队，会发现问题，调整好团队状态！', '20k-25k', '天津京造府红木家具有限公司', 'jinzaofu.jpg', '10年以上', '大专', '邱女士', '13547412584', '天津', '天津');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (6, '家具储备店长', '1565965354897', '负责门店家具销售管理、商品管理、货品管理、库存管理，优秀店长及销售主管工作满两年可成为公司合伙人，享股份及销售利润分红！', '50k以上', '浙江宁波乐庭家具有限公司', 'leting.jpg', '10年以上', '本科', '黎先生', '123465978@qq.com', '浙江', '宁波');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (7, '家居顾问', '1565961211253', '接待客户的咨询，了解客户的需求，跟踪客户的进度，维护客户关系，并达成销售', '2k以下', '江苏南通木森家具有限公司', 'mushen.jpg', '一年以下', '初中', '刘先生', '465321978@qq.ocm', '江苏', '南通');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (8, '销售代表', '1565960000000', '1, 在公司安排下下,负责地区的销售管理工作，完成上级下达的销售回款与工作目标；\r\n2,按要求建立客户档案,并保持良好的客情关系；\r\n1, 在公司安排下下,负责地区的销售管理工作，完成上级下达的销售回款与工作目标；\r\n2,按要求建立客户档案,并保持良好的客情关系；\r\n1, 在公司安排下下,负责地区的销售管理工作，完成上级下达的销售回款与工作目标；\r\n2,按要求建立客户档案,并保持良好的客情关系；\r\n1, 在公司安排下下,负责地区的销售管理工作，完成上级下达的销售回款与工作目标；\r\n2,按要求建立客户档案,并保持良好的客情关系；\r\n', '2k-5k', '四川宜宾南李家具有限公司', 'nanli.png', '5-10年', '硕士', '刘小姐', '15889632455', '四川', '宜宾');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (9, '区域经理\r\n', '1565960999999', '本公司现因业务拓展， 现急招区域招商经理数名，要求有较强的心理承受能力，有干劲。主要负责公司经销商客户挖掘，有相关工作经验者优先，待遇优厚，只要有能力什么都好说', '10k-15k', '河北唐山欧奥家具有限公司', 'ouao.jpg', '3-5年', '大专', '康先生', '13666985478', '河北', '唐山');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (10, '销售经理/主管', '1565960888888', '本公司现因业务拓展， 现急招区域招商经理数名，要求有较强的心理承受能力，有干劲。主要负责公司经销商客户挖掘，有相关工作经验者优先，待遇优厚，只要有能力什么都好说。', '50k以上', '山东济南鹏程家具有限公司', 'pencheng.jpg', '10年以上', '博士', '康小姐', '15558569874', '山东', '济南');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (11, '瓷砖业务精英', '1565960777777', '1、负责公司瓷砖产品的销售及推广；\r\n2、根据市场营销计划，完成销售指标', '2k以下', '福建厦门平行家具有限公司', 'pingxing.jpg', '一年以下', '大专', '朱先生', '15523663214', '福建', '厦门');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (12, '模压门雕刻师傅', '1565960666666', '1、根据工艺或客户要求，制作成品；\r\n2、按时按量完成生产任务；\r\n3、能够听从领导安排的各项任务。', '15k-20k', '安徽淮南曲美家具有限公司', 'qumei.jpg', '5-10年', '博士', '朱小姐', '13552664782', '安徽', '淮南');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (13, '质量管理', '1565960555555', '1、负责厨房橱柜台面石的日常检验，并对检验后的产品进行状态标识；\r\n2、行使检验职责，填写相应的检验记录表单；\r\n3、对检验中发生的问题进行处理过程跟踪；\r\n4、每月对检验数据进行汇总、统计；\r\n5、完成领导交办的其他临时性事宜。', '2k-5k', '河南南阳神恩家具有限公司', 'sennoo.jpg', '一年以下', '初中', '汤先生', '132544564@qq.com', '河南', '南阳');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (14, '设计学徒', '1565960444444', '1、零基础，无工作经验，年满18周岁，无学历，无技术，想提高学历，并且学一门技术的人群；\r\n2、在职人员，想往更高层次设计方向发展，想成为一名成功设计师的人群；\r\n3、想转行人士，想往设计发展的人群；\r\n4、想拿高薪水，热爱设计的人群；', '2k以下', '江西新余双石家具有限公司', 'shuangshi.jpg', '3-5年', '中专', '汤小姐', '13774558966', '江西', '新余');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (15, '销售代表', '1565960333333', '1、负责公司产品的销售及推广；\r\n2、根据市场营销计划，完成部门销售指标；', '50k以上', '贵州贵阳天美家具有限公司', 'tianmei.jpg', '3-5年', '中专', '邱先生', '132222566987', '贵州', '贵阳');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (16, '工地项目经理', '1565960111111', '1、有1年以上相关工作经验，做过大型楼盘，小区装修工程的优先考虑；\r\n2、对家装修现场施工有一定的了解，熟悉施工图纸，材料与施工工艺和施工管理；\r\n3、有较强的沟通及协调能力，能解决好客户与施工单位之间的问题，有团队精神；', '15k-20k', '云南昆明夜雨家具有限公司', 'yeyu.jpg', '1-3年', '高中', '张先生', '13365824635', '云南', '昆明');
INSERT INTO `career_company`(`cid`, `title`, `time`, `details`, `salary`, `cname`, `pic`, `experience`, `education`, `linkman`, `phone`, `province`, `cantonal`) VALUES (17, '售后专员', '1565960222222', '1、主要职责是磁砖铺贴前量房复尺，铺贴指导及售后问题处理；', '20k-25k', '青海西林优尚家具有限公司', 'youju.jpg', '1-3年', '高中', '张小姐', '132465798@qq.ocm', '青海', '西林');
#4职位收藏
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (1, 5, 1, '店长/卖场经理', '20k-25k', '1565962356256', '天津京造府红木家具有限公司', '10年以上', '大专', 'jinzaofu.jpg', '天津', '天津');
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (2, 6, 1, '家具储备店长', '50K以上', '1565965354897', '浙江宁波乐庭家具有限公司', '10年以上', '本科', 'leting.jpg', '浙江', '宁波');
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (3, 5, 1, '店长/卖场经理', '20k-25k', '1565962356256', '天津京造府红木家具有限公司', '10年以上', '大专', 'jinzaofu.jpg', '天津', '天津');
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (4, 6, 1, '家具储备店长', '50K以上', '1565965354897', '浙江宁波乐庭家具有限公司', '10年以上', '本科', 'leting.jpg', '浙江', '宁波');
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (5, 5, 1, '店长/卖场经理', '20k-25k', '1565962356256', '天津京造府红木家具有限公司', '10年以上', '大专', 'jinzaofu.jpg', '天津', '天津');
INSERT INTO `career_collect`(`coid`, `cid`, `uid`, `title`, `salary`, `time`, `cname`, `experience`, `education`, `pic`, `province`, `cantonal`) VALUES (6, 6, 1, '家具储备店长', '50K以上', '1565965354897', '浙江宁波乐庭家具有限公司', '10年以上', '本科', 'leting.jpg', '浙江', '宁波');


























#4公司
#2工作经历   
#CREATE TABLE career_experience(eid INT PRIMARY KEY AUTO_INCREMENT,
#			       uid VARCHAR(36),  #用户id
#                               FOREIGN KEY (uid) REFERENCES career_user(uid),
#			       #公司名称. 
#			       #部门 
#			       #职责 
#
#);
#3发布信息
