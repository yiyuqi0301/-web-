package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import kj.beans.Course;
import kj.dao.getStuInfoBaseDao;
import kj.dao.impl.getStuInfoBaseDaoImpl;

class getstubase {
	getStuInfoBaseDao gi = new getStuInfoBaseDaoImpl();
	@Test
	void testGetCourseId() {
		List<Course> courses = gi.getCourseId("22222222");
		for (Course course : courses) {
			System.out.println(course);
		}
	}



}
