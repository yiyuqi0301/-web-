package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import kj.beans.Score;
import kj.dao.getStuInfoBaseDao2;
import kj.dao.impl.getStuInfoBaseDao2Impl;

class getstubase2 {
	
	getStuInfoBaseDao2 gi = new getStuInfoBaseDao2Impl();

	@Test
	void testGetStuId() {
		List<Score> scores = gi.getStuId("1");
		for (Score score : scores) {
			System.out.println(score);
		}
	}

}
