package kj.service.impl;


import kj.beans.User;
import kj.beans.User_stu;
import kj.dao.User_stuDao;
import kj.dao.impl.User_stuDaoImpl;
import kj.service.User_stuService;

public class User_stuServiceImpl implements User_stuService{
	private User_stuDao user_stuDao = new User_stuDaoImpl();
	@Override
	public User_stu getUser_stu(User_stu user) {
		return user_stuDao.getUser_stu(user);
	}
	
	@Override
	public int editUser_tea(User_stu user) {
		return user_stuDao.editUser_stu(user);
	}
	
	@Override
	public int delUser_tea(User_stu user) {
		return user_stuDao.delUser_stu(user);
	}
	
	@Override
	public int addUser_stu(User_stu user) {
		return user_stuDao.addUser_stu(user);
	}

	@Override
	public User_stu getUserByEmail_stu(User_stu user) {
		return user_stuDao.getUserByEmail_stu(user);
	}
	
	@Override
	public User_stu getUserByUsername_stu(User_stu user) {
		return user_stuDao.getUserByUsername_stu(user);
	}




}
