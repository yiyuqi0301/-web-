package kj.dao.impl;

import kj.beans.Score;
import kj.dao.BaseDao;
import kj.dao.ScoreOpDao;

public class ScoreOpDaoImpl extends BaseDao<Score> implements ScoreOpDao {

	@Override
	public int editScore(Score score) {
		String sql = "update tb_score_info set stu_username=?,name=?,classid=?,college=?,subject=? where stu_username=?";
		int n = this.update(sql,score.getStu_username(),score.getName(),score.getClassid(),score.getCollege(),score.getSubject(),score.getStu_username());
		return n;
	}

	@Override
	public int delScore(Score score) {
		String sql = "delete from tb_score_info where stu_username=? and course_id=?";
		int n = this.update(sql,score.getStu_username(),score.getCourse_id());
		return n;
	}

	@Override
	public int editScoreO(Score score) {
		String sql = "update tb_score_info set score=? where stu_username=? and course_id=?";
		int n = this.update(sql,score.getScore(),score.getStu_username(),score.getCourse_id());
		return n;
	}

	@Override
	public int addScore(Score score) {
		String sql = "INSERT INTO tb_score_info (stu_username,course_id,score,classid,subject,college,course_name,name) VALUES(?,?,?,?,?,?,?,?)";
		int n = this.update(sql,score.getStu_username(),score.getCourse_id(),score.getScore(),score.getClassid(),score.getSubject(),score.getCollege(),score.getCourse_name(),score.getName());
		return n;
	}

}
