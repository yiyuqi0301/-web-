package kj.dao;

import java.util.List;

import kj.beans.Course;

public interface getCourseInfoDao {
	List<Course> getAllCourseInfo();
	Course getCourseInfo(String coursename);
}
