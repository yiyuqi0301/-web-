# 基于web的学生管理系统

#### 基本介绍
本项目为基于web的学生管理系统，编程工具为eclipse，使用了bootstrap框架，jsp+servlet+js,数据库使用mysql。
其中的表格使用bootstrap table插件

本项目默认tomcat版本为9.0

#### 功能介绍

学生信息和成绩信息基本增删改查，课程信息增删查，简单模糊查询，简单分页显示。

#### 安装教程

1.  项目下载后导入eclipse，如导入其他idea，请自行进行调整。(默认您已配置好tomcat9.0，若不是，请安装9.0或调整为您的版本，如下图所示)
    
    ![Image text](https://github.com/yiyuqi0301/web/raw/master/tomcat.png)

2.  mysql 导入config下的sims数据库,并修改config下的druid.properties信息，改成你的数据库连接，密码，账户等。

3.  配置完运行即可。

#### 截图

1.  登录

    ![Image text](https://github.com/yiyuqi0301/web/raw/master/login.png)

2.  找回密码

    ![Image text](https://github.com/yiyuqi0301/web/raw/master/findback.png)

    ![Image text](https://github.com/yiyuqi0301/web/raw/master/findmessage.png)

    注：(找回密码发送至邮箱功能，需要在servlet/SendEmailManger中配置发件邮箱的地址和授权码，文件中已预留提示信息)

3.  查询

    ![Image text](https://github.com/yiyuqi0301/web/raw/master/query.png)

4.  编辑等

    ![Image text](https://github.com/yiyuqi0301/web/raw/master/edit.png)
