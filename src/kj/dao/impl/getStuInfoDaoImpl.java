package kj.dao.impl;

import java.util.List;

import kj.beans.User_stu;
import kj.dao.BaseDao;
import kj.dao.getStuInfoDao;

public class getStuInfoDaoImpl extends BaseDao<User_stu> implements getStuInfoDao{


	@Override
	public List<User_stu> getAllStuInfo() {
		String sql = "select * from tb_stu_info";
		return this.getBeanList(sql);
	}

}

