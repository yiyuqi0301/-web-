package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

import kj.beans.test;
import kj.dao.testDao;
import kj.dao.impl.testDaoImpl;

class getalltest {
	testDao td = new testDaoImpl();
	@Test
	void testGetalltest() {
		List<test> tests = td.getalltest();
		for (test test : tests) {
			System.out.println(test);
		}
	}

}
