package kj.dao.impl;

import java.util.List;

import kj.beans.ClassInfo;
import kj.dao.BaseDao;
import kj.dao.getCollegeInfoDao;

public class getCollegeInfoDaoImpl extends BaseDao<ClassInfo> implements getCollegeInfoDao {

	@Override
	public List<ClassInfo> getAllCollegeInfo() {
		String sql = "select * from tb_class_info";
		return this.getBeanList(sql);
	}

	@Override
	public List<ClassInfo> getAllSubjectInfo(String college) {
		String sql = "select * from tb_class_info where college = ?";
		return this.getBeanList(sql,college);
	}

	@Override
	public List<ClassInfo> getAllClassInfo(String subject) {
		String sql = "select * from tb_class_info where subject = ?";
		return this.getBeanList(sql,subject);
	}

	

}
