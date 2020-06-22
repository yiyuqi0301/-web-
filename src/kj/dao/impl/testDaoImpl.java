package kj.dao.impl;

import java.util.List;

import kj.beans.test;
import kj.dao.BaseDao;
import kj.dao.testDao;

public class testDaoImpl extends BaseDao<test> implements testDao {

	@Override
	public List<test> getalltest() {
		String sql = "select * from test";
		return this.getBeanList(sql);
	}
	
}
