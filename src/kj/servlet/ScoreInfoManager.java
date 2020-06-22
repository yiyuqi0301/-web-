package kj.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kj.beans.Course;
import kj.beans.Score;
import kj.beans.User;
import kj.dao.ScoreOpDao;
import kj.dao.getCourseInfoDao;
import kj.dao.getScoreInfoDao;
import kj.dao.impl.ScoreOpDaoImpl;
import kj.dao.impl.getCourseInfoDaoImpl;
import kj.dao.impl.getScoreInfoDaoImpl;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class ScoreInfoManager
 */
@WebServlet("/ScoreInfoManager")
public class ScoreInfoManager extends BaseServlet {
	private static final long serialVersionUID = 1L;

	getCourseInfoDao gci = new getCourseInfoDaoImpl();
	ScoreOpDao sco = new ScoreOpDaoImpl();
	getScoreInfoDao gsi = new getScoreInfoDaoImpl();
	protected void getScoreInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入成绩查询");
		List<Score> score = new ArrayList<Score>();
		score.addAll(gsi.getAllScoreInfo());
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(score);
        System.out.println(score.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();

	}
	
	
	protected void addScoreInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入成绩添加");
		
		String score_id = req.getParameter("sscore_id");
		String score_name = req.getParameter("sscore_name");
		String score_coursename = req.getParameter("sscore_coursename");
		String score_courseid = gci.getCourseInfo(score_coursename).getCourse_id();		
		String score_score = req.getParameter("sscore_score");
		String score_collegeinput = req.getParameter("sscore_collegeinput");
		String score_subjectinput = req.getParameter("sscore_subjectinput");
		String score_classinput = req.getParameter("sscore_classinput");
		Score score = new Score(score_id,score_courseid,score_score,score_classinput,score_subjectinput,score_collegeinput,score_coursename,score_name);
		int n = sco.addScore(score);
		String msg = "";
		if(n==0) {
			msg="{\"result\":\"添加失败\"}";
		}else 
			msg="{\"result\":\"添加成功\"}";
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
		JSONObject json_test = JSONObject.fromObject(msg);
        System.out.println(msg.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json_test);  
        out.flush();  
        out.close();
	
	}
	protected void editScoreInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入成绩修改");
		String score_id = req.getParameter("score_id");
		String score_name = req.getParameter("score_name");
		String score_coursename = req.getParameter("score_coursename");
		String score_courseid = req.getParameter("score_courseid");
		String score_score = req.getParameter("score_score");
		String score_collegeinput = req.getParameter("score_collegeinput");
		String score_subjectinput = req.getParameter("score_subjectinput");
		String score_classinput = req.getParameter("score_classinput");
		Score score = new Score(score_id,score_courseid,score_score,score_classinput,score_subjectinput,score_collegeinput,score_coursename,score_name);
		int n = sco.editScoreO(score);
		String msg = "";
		if(n==0) {
			msg="{\"result\":\"修改失败\"}";
		}else 
			msg="{\"result\":\"修改成功\"}";
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
		JSONObject json_test = JSONObject.fromObject(msg);
        System.out.println(msg.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json_test);  
        out.flush();  
        out.close();
	
	}
	
	
	protected void delScoreInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入成绩删除");
		String score_id = req.getParameter("score_id");
		String score_name = req.getParameter("score_name");
		String score_coursename = req.getParameter("score_coursename");
		String score_courseid = req.getParameter("score_courseid");
		String score_score = req.getParameter("score_score");
		String score_collegeinput = req.getParameter("score_collegeinput");
		String score_subjectinput = req.getParameter("score_subjectinput");
		String score_classinput = req.getParameter("score_classinput");
		Score score = new Score(score_id,score_courseid,score_score,score_classinput,score_subjectinput,score_collegeinput,score_coursename,score_name);
		int n = sco.delScore(score);
		String msg = "";
		if(n==0) {
			msg="{\"result\":\"删除失败\"}";
		}else 
			msg="{\"result\":\"删除成功\"}";
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
		JSONObject json_test = JSONObject.fromObject(msg);
        System.out.println(msg.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json_test);  
        out.flush();  
        out.close();
	
	}
	
	
	


}
