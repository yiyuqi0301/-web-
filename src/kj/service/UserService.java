package kj.service;

import kj.beans.User;
import kj.beans.User_stu;

public interface UserService {

	int  addUser_tea (User user);
	User getUserByEmail_tea (User user);
	User getUserByUsername_tea (User user);
	User getUser_tea (User user);
	
}
