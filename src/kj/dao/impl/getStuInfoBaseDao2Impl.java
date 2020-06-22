package kj.dao.impl;

import java.util.List;

import kj.beans.Score;
import kj.dao.BaseDao;
import kj.dao.getStuInfoBaseDao2;

public class getStuInfoBaseDao2Impl extends BaseDao<Score> implements getStuInfoBaseDao2 {

	@Override
	public List<Score> getStuId(String CourseId) {
		String sql = "select * from tb_score_info where course_id = ?";
		return this.getBeanList(sql,CourseId);
	}

}
