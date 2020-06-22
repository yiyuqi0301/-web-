package kj.dao.impl;

import java.util.List;

import kj.beans.Course;
import kj.dao.BaseDao;
import kj.dao.getStuInfoBaseDao;

public class getStuInfoBaseDaoImpl extends BaseDao<Course> implements getStuInfoBaseDao {

	@Override
	public List<Course> getCourseId(String teaId) {
		String sql = "select * from tb_courses_info where tea_username = ?";
		return this.getBeanList(sql,teaId);
	}



}
