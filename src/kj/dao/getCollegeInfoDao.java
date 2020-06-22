package kj.dao;

import java.util.List;

import kj.beans.ClassInfo;

public interface getCollegeInfoDao {
	List<ClassInfo> getAllCollegeInfo();
	List<ClassInfo> getAllSubjectInfo(String college);
	List<ClassInfo> getAllClassInfo(String subject);
}
