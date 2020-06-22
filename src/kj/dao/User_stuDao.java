package kj.dao;

import kj.beans.User_stu;

public interface User_stuDao {
	int  addUser_stu (User_stu user);
	int  editUser_stu (User_stu user);
	int  delUser_stu (User_stu user);
	User_stu getUserByEmail_stu (User_stu user);
	User_stu getUserByUsername_stu (User_stu user);
	User_stu getUser_stu (User_stu user);
}
