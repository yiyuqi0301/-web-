package kj.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import kj.beans.test;
import kj.dao.testDao;
import kj.dao.impl.testDaoImpl;
import net.sf.json.JSONArray;

/**
 * Servlet implementation class testServlet
 */
@WebServlet("/testServlet")
public class testServlet extends BaseServlet {
	private static final long serialVersionUID = 1L;


	testDao td = new testDaoImpl();
	protected void getalltest(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("测试");
		List<test> tests = td.getalltest();
		resp.setContentType("text/html; charset=utf-8");
        //调用JSONArray.fromObject方法把array中的对象转化为JSON格式的数组
        JSONArray json=JSONArray.fromObject(tests);
        System.out.println(tests.toString());
        PrintWriter out = resp.getWriter();  
        out.println(json);  
        out.flush();  
        out.close();
	}

}
