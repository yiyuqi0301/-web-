package kj.service;

import kj.beans.User;
import kj.beans.User_stu;

public interface User_stuService {
	int  addUser_stu (User_stu user);
	int  editUser_tea (User_stu user);
	int  delUser_tea (User_stu user);
	User_stu getUserByEmail_stu (User_stu user);
	User_stu getUserByUsername_stu (User_stu user);
	User_stu getUser_stu (User_stu user);
}
