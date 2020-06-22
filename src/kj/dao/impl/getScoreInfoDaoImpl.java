package kj.dao.impl;

import java.util.List;

import kj.beans.Score;
import kj.dao.BaseDao;
import kj.dao.getScoreInfoDao;

public class getScoreInfoDaoImpl extends BaseDao<Score> implements getScoreInfoDao {

	@Override
	public List<Score> getAllScoreInfo() {
		String sql = "select * from tb_score_info";
		return this.getBeanList(sql);
	}

}
