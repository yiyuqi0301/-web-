package kj.dao;

import kj.beans.User;
import kj.beans.User_stu;

/**
 * 利用用户名和密码查找用户信息接口
 * @author YYQ
 *
 */
public interface UserDao {
	
//	public User getUserByUsernameAndPassword(String username,String password);
//	
//	public User getUserByEmail(String email);
//	
//	//如果注册的信息特别多，一定要封装成对象传递. 
//	public void insertUser(String username,String password,String email);
	
	int  addUser_tea (User user);
	User getUserByEmail_tea (User user);
	User getUserByUsername_tea (User user);
	User getUser_tea (User user);
}
