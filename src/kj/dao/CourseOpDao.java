package kj.dao;

import kj.beans.Course;

public interface CourseOpDao {
	int  addCourse (Course course);
	int  delCourse(Course course);
}
