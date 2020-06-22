package kj.dao.impl;

import kj.beans.User_stu;
import kj.dao.BaseDao;
import kj.dao.User_stuDao;
public class User_stuDaoImpl extends BaseDao<User_stu> implements User_stuDao{

	@Override
	public int addUser_stu(User_stu user) {
		String sql = "INSERT INTO tb_stu_info (username,password,email,name,college,subject,classid,sex,level) VALUES(?,?,?,?,?,?,?,?,?)";
		int n = this.update(sql,user.getUsername(),user.getPassword(),user.getEmail(),user.getName(),user.getCollege(),user.getSubject(),user.getClassid(),user.getSex(),user.getLevel());
		return n;
	}
	
	@Override
	public int editUser_stu(User_stu user) {
		String sql = "update tb_stu_info set username=?,password=?,email=?,name=?,college=?,subject=?,classid=?,sex=?,level='0' where username=?";
		int n = this.update(sql,user.getUsername(),user.getPassword(),user.getEmail(),user.getName(),user.getCollege(),user.getSubject(),user.getClassid(),user.getSex(),user.getUsername());
		return n;
	}
	
	@Override
	public int delUser_stu(User_stu user) {
		String sql = "delete from tb_stu_info where username=?";
		int n = this.update(sql,user.getUsername());
		return n;
	}

	@Override
	public User_stu getUserByEmail_stu(User_stu user) {
		String sql = "select * from tb_stu_info where email = ?";
		User_stu user1 = this.getBean(sql, user.getEmail());
		return user1;
	}

	@Override
	public User_stu getUserByUsername_stu(User_stu user_stu) {
		String sql = "select * from tb_stu_info where username = ?";
		User_stu user1 = this.getBean(sql, user_stu.getUsername());
		return user1;
	}
	@Override
	public User_stu getUser_stu(User_stu user) {
		String sql = "select * from tb_stu_info where username = ? and password = ?";
		User_stu user1 = this.getBean(sql, user.getUsername(),user.getPassword());
		return user1;
	}





}
