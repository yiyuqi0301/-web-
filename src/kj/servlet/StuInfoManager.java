package kj.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kj.beans.ClassInfo;
import kj.beans.Course;
import kj.beans.Score;
import kj.beans.User_stu;
import kj.dao.ScoreOpDao;
import kj.dao.getCollegeInfoDao;
import kj.dao.getCourseInfoDao;
import kj.dao.getStuInfoDao;
import kj.dao.impl.ScoreOpDaoImpl;
import kj.dao.impl.getCollegeInfoDaoImpl;
import kj.dao.impl.getCourseInfoDaoImpl;
import kj.dao.impl.getStuInfoDaoImpl;
import kj.service.User_stuService;
import kj.service.impl.User_stuServiceImpl;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class StuInfoManager
 */
@WebServlet("/StuInfoManager")
public class StuInfoManager extends BaseServlet {
	private static final long serialVersionUID = 1L;
	
	getCourseInfoDao gcid = new getCourseInfoDaoImpl();
	getStuInfoDao gsi = new getStuInfoDaoImpl();
	getCollegeInfoDao gci = new getCollegeInfoDaoImpl();
	User_stuService stuservice = new User_stuServiceImpl();
	ScoreOpDao sco = new ScoreOpDaoImpl();
	
//	protected void getStuInfoLevel2(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//		HttpSession session = req.getSession();
//		System.out.println("level3进来了");
//		User user = (User) session.getAttribute("user");
//		String college = user.getCollege();
//		List<User_stu> user_stu = new ArrayList<User_stu>();
//		user_stu.addAll(gsi.getAllStuInfoLevel2(college));
//		resp.setContentType("text/html; charset=utf-8");
//        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
//        JSONArray json=JSONArray.fromObject(user_stu);
//        System.out.println(user_stu.toString());
//        PrintWriter out = resp.getWriter();  
//        out.println(json);  
//        out.flush();  
//        out.close();
//	}
	
	protected void getStuInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("level3进来了");
		List<User_stu> user_stu = new ArrayList<User_stu>();
		user_stu.addAll(gsi.getAllStuInfo());
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(user_stu);
        System.out.println(user_stu.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();

	}
	
	
	protected void getCollegeInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("学院信息");
		List<ClassInfo> infos = new ArrayList<ClassInfo>();
		infos.addAll(gci.getAllCollegeInfo());
		List<String> classes = new ArrayList<String>();
		for (ClassInfo info : infos) {
			classes.add(info.getCollege());
		}
		Set<String> set = new HashSet<>();
        set.addAll(classes);
        classes = new ArrayList<String>(set);
        Collections.reverse(classes);
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(classes);
        System.out.println(classes.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();
	}
	
	
	protected void getCourseInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("课程信息");
		List<Course> infos = new ArrayList<Course>();
		infos.addAll(gcid.getAllCourseInfo());
		List<String> courses = new ArrayList<String>();
		for (Course course : infos) {
			courses.add(course.getCourse_name());
		}
		Set<String> set = new HashSet<>();
        set.addAll(courses);
        courses = new ArrayList<String>(set);
        Collections.reverse(courses);
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(courses);
        System.out.println(courses.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();
	}
	
	
	
	protected void getSubjectInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("专业信息");
		List<ClassInfo> infos = new ArrayList<ClassInfo>();
		String college = req.getParameter("college");
		infos.addAll(gci.getAllSubjectInfo(college));
		List<String> classes = new ArrayList<String>();
		for (ClassInfo info : infos) {
			classes.add(info.getSubject());
		}
		Set<String> set = new HashSet<>();
        set.addAll(classes);
        classes = new ArrayList<String>(set);
        Collections.reverse(classes);
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(classes);
        System.out.println(classes.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();
	}
	
	
	
	protected void getClassInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("班级信息");
		List<ClassInfo> infos = new ArrayList<ClassInfo>();
		String subject = req.getParameter("subject");
		infos.addAll(gci.getAllClassInfo(subject));
		List<String> classes = new ArrayList<String>();
		for (ClassInfo info : infos) {
			classes.add(info.getClassid());
		}
		Set<String> set = new HashSet<>();
        set.addAll(classes);
        classes = new ArrayList<String>(set);
        Collections.reverse(classes);
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(classes);
        System.out.println(classes.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();
	}
	
	protected void addStuInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入添加学生信息");
		String name = req.getParameter("nameinput");
		String id = req.getParameter("idinput");
		String email = req.getParameter("emailinput");
		String college = req.getParameter("collegeinput");
		String subject = req.getParameter("subjectinput");
		String classid = req.getParameter("classinput");
		String sexid = req.getParameter("sexid");
		
		User_stu stu = new User_stu(id,id,email,name,sexid,college,subject,classid,"0");
		System.out.println("新增学生："+stu);
		int n = stuservice.addUser_stu(stu);
		String msg = "";
		if(n==0) {
			msg="{\"result\":\"添加失败\"}";
		}else {
			msg="{\"result\":\"添加成功\"}";
		}
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
		JSONObject json_test = JSONObject.fromObject(msg);
        System.out.println(msg.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json_test);  
        out.flush();  
        out.close();
		
		
	}
	
	protected void editStuInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入更新学生信息");
		String name = req.getParameter("nameinput");
		String id = req.getParameter("idinput");
		String email = req.getParameter("emailinput");
		String college = req.getParameter("collegeinput");
		String subject = req.getParameter("subjectinput");
		String classid = req.getParameter("classinput");
		String sexid = req.getParameter("sexid");
		
		User_stu stu = new User_stu(id,id,email,name,sexid,college,subject,classid,"0");
		Score score = new Score(id,null,null,classid,subject,college,null,name);
				
		System.out.println("更新学生："+stu);
		int n = stuservice.editUser_tea(stu);
		//int n2 = sco.editScore(score);
		String msg = "";
		if(n==0) {
			msg="{\"result\":\"更新失败\"}";
		}else {
			msg="{\"result\":\"更新成功\"}";
		}
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
		JSONObject json_test = JSONObject.fromObject(msg);
        System.out.println(msg.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json_test);  
        out.flush();  
        out.close();
		
		
	}
	
	
	protected void delStuInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入删除学生信息");
		String name = req.getParameter("nameinput");
		String id = req.getParameter("idinput");
		String email = req.getParameter("emailinput");
		String college = req.getParameter("collegeinput");
		String subject = req.getParameter("subjectinput");
		String classid = req.getParameter("classinput");
		String sexid = req.getParameter("sexid");
		
		User_stu stu = new User_stu(id,id,email,name,sexid,college,subject,classid,"0");
		Score score = new Score(id,null,null,classid,subject,college,null,name);
		System.out.println("删除学生："+stu);
		int n = stuservice.delUser_tea(stu);
		int n2 = sco.delScore(score);
		String msg = "";
		if(n==0&n2==0) {
			msg="{\"result\":\"删除失败\"}";
		}else {
			msg="{\"result\":\"删除成功\"}";
		}
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
