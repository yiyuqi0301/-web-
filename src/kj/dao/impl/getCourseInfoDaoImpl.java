package kj.dao.impl;

import java.util.List;

import kj.beans.Course;
import kj.dao.BaseDao;
import kj.dao.getCourseInfoDao;

public class getCourseInfoDaoImpl extends BaseDao<Course> implements getCourseInfoDao {

	@Override
	public List<Course> getAllCourseInfo() {
		String sql = "select * from tb_courses_info";
		return this.getBeanList(sql);
	}

	@Override
	public Course getCourseInfo(String coursename) {
		String sql = "select * from tb_courses_info where course_name=?";
		return this.getBean(sql,coursename);
	}

}
