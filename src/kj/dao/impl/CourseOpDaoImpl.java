package kj.dao.impl;

import kj.beans.Course;
import kj.dao.BaseDao;
import kj.dao.CourseOpDao;

public class CourseOpDaoImpl extends BaseDao<Course> implements CourseOpDao {

	@Override
	public int addCourse(Course course) {
		String sql = "INSERT INTO tb_courses_info (course_id,course_name,tea_username,tea_name,subject,college) VALUES(?,?,?,?,?,?)";
		int n = this.update(sql,course.getCourse_id(),course.getCourse_name(),course.getTea_username(),course.getTea_name(),course.getSubject(),course.getCollege());
		return n;
	}

	@Override
	public int delCourse(Course course) {
		String sql = "delete from tb_courses_info where course_id=?";
		int n = this.update(sql,course.getCourse_id());
		return n;
	}


}
