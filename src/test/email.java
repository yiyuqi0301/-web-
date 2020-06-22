package test;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import kj.beans.User;
import kj.dao.UserDao;
import kj.dao.impl.UserDaoImpl;

class email {
	private UserDao userDao = new UserDaoImpl();

	@Test
	void testAddUser_tea() {
//		int n = userDao.addUser_tea(new User("123","123","123@qq.com","123","123","123","123"));
//		System.out.println(n);
		
	}

	@Test
	void testGetUserByEmail_tea() {
		User user = userDao.getUserByEmail_tea(new User(null,null,"222@qq.com",null,null,null,null));
		System.out.println("邮箱"+user);
	}

	@Test
	void testGetUserByUsername_tea() {
		User user = userDao.getUserByUsername_tea(new User("11111111", null, null, null, null, null, null));
		System.out.println("用户名"+user);
	}

	@Test
	void testGetUser_tea() {
		User user = userDao.getUser_tea(new User("11111111", "111", null, null, null, null, null));
		if(user!=null)
			System.out.println("用户名+密码"+user);
		else
			System.out.println("fail");
	}

}
