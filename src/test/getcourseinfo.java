package test;



import java.util.List;

import org.junit.jupiter.api.Test;

import kj.beans.Course;
import kj.dao.getCourseInfoDao;
import kj.dao.impl.getCourseInfoDaoImpl;

class getcourseinfo {
	getCourseInfoDao gci = new getCourseInfoDaoImpl();
	@Test
	void testGetAllCourseInfo() {
		List<Course> stus = gci.getAllCourseInfo();
		for (Course user_stu : stus) {
			System.out.println(user_stu);
		}
	}

}
