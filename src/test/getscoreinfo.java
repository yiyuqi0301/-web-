package test;


import java.util.List;

import org.junit.jupiter.api.Test;

import kj.beans.Score;
import kj.dao.getScoreInfoDao;
import kj.dao.impl.getScoreInfoDaoImpl;

class getscoreinfo {
	getScoreInfoDao gci = new getScoreInfoDaoImpl();
	@Test
	void testGetAllScoreInfo() {
		List<Score> stus = gci.getAllScoreInfo();
		for (Score user_stu : stus) {
			System.out.println(user_stu);
		}
	}

}
