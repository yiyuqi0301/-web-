package kj.dao;

import kj.beans.Score;

public interface ScoreOpDao {
	int  editScore (Score score);
	int  editScoreO (Score score);
	int  delScore(Score score);
	int  addScore(Score score);
}
