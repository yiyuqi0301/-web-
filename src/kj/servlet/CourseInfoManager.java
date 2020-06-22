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
import kj.beans.User;
import kj.beans.User_stu;
import kj.dao.CourseOpDao;
import kj.dao.getCourseInfoDao;
import kj.dao.impl.CourseOpDaoImpl;
import kj.dao.impl.getCourseInfoDaoImpl;
import kj.service.UserService;
import kj.service.impl.UserServiceImpl;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class CourseInfoManager
 */
@WebServlet("/CourseInfoManager")
public class CourseInfoManager extends BaseServlet {
	private static final long serialVersionUID = 1L;

	CourseOpDao cod = new CourseOpDaoImpl();
	getCourseInfoDao gci = new getCourseInfoDaoImpl();
	UserService userservice = new UserServiceImpl();
	
	protected void getCourseInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入课程查询");
		List<Course> course = new ArrayList<Course>();
		course.addAll(gci.getAllCourseInfo());
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(course);
        System.out.println(course.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();

	}
	
	protected void addCourseInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入课程添加");
		String numinput = req.getParameter("numinput");
		String tea_idinput = req.getParameter("tea_idinput");
		String nameinput = req.getParameter("nameinput");
		String course_nameinput = req.getParameter("course_nameinput");
		String college_courseinput = req.getParameter("college_courseinput");
		String subject_courseinput = req.getParameter("subject_courseinput");
		Course course = new Course(numinput,course_nameinput,tea_idinput,nameinput,subject_courseinput,college_courseinput);
		int n = cod.addCourse(course);
		User user = userservice.getUserByUsername_tea(new User(tea_idinput,null,null,null,null,null,null));
		int n1 = 0;
		if(user == null) {
			//添加新教师
			n1 = userservice.addUser_tea(new User(tea_idinput,tea_idinput,tea_idinput+"@qq.com",nameinput,college_courseinput,subject_courseinput,"1"));
		}else {
			n1 = 0;
		}
		String msg = "";
		
		if(n==0) {
			msg="{\"result\":\"添加失败\"}";
		}else if(n1==0){
			msg="{\"result\":\"添加成功,无新教师\"}";
		}else {
			msg="{\"result\":\"添加成功,添加新教师\"}";
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
	
	protected void delCourseInfo(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("进入课程删除");
		String numinput = req.getParameter("numinput");
		String tea_idinput = req.getParameter("tea_idinput");
		String nameinput = req.getParameter("nameinput");
		String course_nameinput = req.getParameter("course_nameinput");
		String college_courseinput = req.getParameter("college_courseinput");
		String subject_courseinput = req.getParameter("subject_courseinput");
		Course course = new Course(numinput,course_nameinput,tea_idinput,nameinput,subject_courseinput,college_courseinput);
		int n = cod.delCourse(course);
		String msg = "";
		if(n==0) {
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
