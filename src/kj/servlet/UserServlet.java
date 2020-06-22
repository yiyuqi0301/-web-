package kj.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import kj.beans.User;
import kj.beans.User_stu;
import kj.service.UserService;
import kj.service.User_stuService;
import kj.service.impl.UserServiceImpl;
import kj.service.impl.User_stuServiceImpl;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet("/UserServlet")
public class UserServlet extends BaseServlet {
	private static final long serialVersionUID = 1L;
	UserService userService = new UserServiceImpl();
	User_stuService user_stuService = new User_stuServiceImpl();

	/**
	 * 登录
	 * 
	 * @param req
	 * @param resp
	 * @throws ServletException
	 * @throws IOException
	 */
	protected void login(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 登录功能的实现.
		System.out.println("登录请求过来了.......");
		String username = req.getParameter("username");
		if (username.length() == 11) {
			login_stu(req,resp);
		} else {
			login_tea(req,resp);
		}
		

	}

	protected void login_stu(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 获取用户名
		String username = req.getParameter("username");
		// 获取密码
		String password = req.getParameter("password");
		System.out.println(username + " , " + password);
		User_stu user_stu = user_stuService.getUser_stu(new User_stu(username, password, null, null, null, null, null, null, null));
		System.out.println("学生登录请求过来了.......");
		if (user_stu == null) {
			req.setAttribute("login_msg", "用户名或者密码错误!!!");
			// 开始转发
			req.getRequestDispatcher("/login.jsp").forward(req, resp);
		} else {
			HttpSession session = req.getSession();
			session.setAttribute("user", user_stu);
			resp.sendRedirect(req.getContextPath() + "/index.jsp");
		}
	}
	protected void login_tea(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 获取用户名
		String username = req.getParameter("username");
		// 获取密码
		String password = req.getParameter("password");
		System.out.println(username + " , " + password);
		User user = userService.getUser_tea(new User(username, password, null, null, null, null, null));
		System.out.println("教师登录请求过来了.......");
		if (user == null) {
			req.setAttribute("login_msg", "用户名或者密码错误!!!");
			// 开始转发
			req.getRequestDispatcher("/login.jsp").forward(req, resp);
		} else {
			System.out.println(user);
			HttpSession session = req.getSession();
			session.setAttribute("user", user);
			resp.sendRedirect(req.getContextPath() + "/index.jsp");
		}
	}
	

	/*    *//**
			 * 注册
			 * 
			 * @param req
			 * @param resp
			 * @throws ServletException
			 * @throws IOException
			 *//*
				 * protected void regist(HttpServletRequest req, HttpServletResponse resp)
				 * throws ServletException, IOException { String username =
				 * req.getParameter("username"); String password = req.getParameter("password");
				 * String email = req.getParameter("email"); User user=null;
				 * if(username.length()==11) { user = new User_stu(username,password,email);
				 * }else {
				 * 
				 * } userService.addUser(user);
				 * resp.sendRedirect(req.getContextPath()+"/login.jsp"); }
				 */

	protected void checkUserEmail(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("进入email检测方法aaa");
		String email = request.getParameter("email");
		System.out.println(email);
		//User_stu user = user_stuService.getUserByEmail_stu(new User_stu(null, null, email, null, null, null, null, null));
		User user = userService.getUserByEmail_tea(new User(null, null, email, null, null, null, null));
		// 跳转
		response.setContentType("text/html; charset=utf-8");
		String msg = "";
		System.out.println(user);
		if (user == null) {
			msg = "0";
		} else {
			msg = "1";
		}
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().println(msg);
	}

	protected void checkUserUsername(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("进入username检测方法");
		String username = request.getParameter("username");
		System.out.println("用户名：" + username);
		UserService userService = new UserServiceImpl();

		User_stu user = user_stuService.getUserByUsername_stu(new User_stu(username, null, null, null, null, null, null, null, null));
		User user1 = userService.getUserByUsername_tea(new User(username, null, null, null, null, null, null));
		// 跳转
		response.setContentType("text/html; charset=utf-8");
		String umsg = "";
		if (user == null & user1 == null) {
			umsg = "0";
		} else {
			umsg = "1";
			System.out.println("用户名不可用");
		}
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().println(umsg);
	}

	protected void findUser(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		System.out.println("进入getuser检测方法");
		String email = request.getParameter("email");
		System.out.println("邮箱：" + email);

		
		
		User user1 = userService.getUserByEmail_tea(new User(null, null, email, null, null, null, null));
		User_stu user = user_stuService.getUserByEmail_stu(new User_stu(null, null, email, null, null, null, null, null, null));
		// 跳转
		String pwd = "";
		String pwd1="";
		String emaildress = "";
		if(user!=null) {
			pwd1 += "您的密码为："+user.getPassword();
			emaildress += user.getEmail();
			pwd += "密码已发送至您的邮箱，请注意查看";
			SendEmailManger d = new SendEmailManger(emaildress, "学生管理系统找回密码通知", pwd1);
			System.out.println(pwd1);
			d.start();
		}else if(user1!=null){
			pwd1 += "您的密码为："+user1.getPassword();
			emaildress += user1.getEmail();
			pwd += "密码已发送至您的邮箱，请注意查看";
			SendEmailManger d1 = new SendEmailManger(emaildress, "学生管理系统找回密码通知", pwd1);
			d1.start();
		}else {
			pwd += "邮箱未注册";
		}
		request.setAttribute("pwd", pwd);
		// 开始转发
		request.getRequestDispatcher("/findpassword.jsp").forward(request, response);
	}
	

}
