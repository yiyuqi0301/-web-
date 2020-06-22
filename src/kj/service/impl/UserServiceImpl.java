package kj.service.impl;

import kj.beans.User;
import kj.dao.UserDao;
import kj.dao.impl.UserDaoImpl;
import kj.service.UserService;

public class UserServiceImpl implements UserService{
	private UserDao userDao = new UserDaoImpl();

	@Override
	public int addUser_tea(User user) {
		return userDao.addUser_tea(user);
	}
	

	

	@Override
	public User getUserByEmail_tea(User user) {
		return userDao.getUserByEmail_tea(user);
	}

	@Override
	public User getUserByUsername_tea(User user) {
		return userDao.getUserByUsername_tea(user);
	}

	@Override
	public User getUser_tea(User user) {
		return userDao.getUser_tea(user);
	}



}
