package kj.dao;

import java.util.List;

import kj.beans.Course;

public interface getStuInfoBaseDao {
	List<Course>   getCourseId(String teaId);
}
