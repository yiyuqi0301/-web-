package kj.dao;

import kj.beans.User;
import kj.beans.User_stu;

/**
 * �����û�������������û���Ϣ�ӿ�
 * @author YYQ
 *
 */
public interface UserDao {
	
//	public User getUserByUsernameAndPassword(String username,String password);
//	
//	public User getUserByEmail(String email);
//	
//	//���ע�����Ϣ�ر�࣬һ��Ҫ��װ�ɶ��󴫵�. 
//	public void insertUser(String username,String password,String email);
	
	int  addUser_tea (User user);
	User getUserByEmail_tea (User user);
	User getUserByUsername_tea (User user);
	User getUser_tea (User user);
}
