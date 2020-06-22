package kj.dao.impl;



import kj.beans.User;
import kj.dao.BaseDao;
import kj.dao.UserDao;


public class UserDaoImpl extends BaseDao<User> implements UserDao{

	@Override
	public int addUser_tea(User user) {
		String sql = "INSERT INTO tb_tea_info (username,password,email,name,college,subject,level) VALUES(?,?,?,?,?,?,?)";
		int n =this.update(sql,user.getUsername(),user.getPassword(),user.getEmail(),user.getName(),user.getCollege(),user.getSubject(),user.getLevel());
		return n;
	}

	@Override
	public User getUserByEmail_tea(User user) {
		String sql = "select * from tb_tea_info where email = ?";
		User user1 = this.getBean(sql, user.getEmail());
		return user1;
	}

	@Override
	public User getUserByUsername_tea(User user) {
		String sql = "select * from tb_tea_info where username = ?";
		User user1 = this.getBean(sql, user.getUsername());
		return user1;
	}
	
	@Override
	public User getUser_tea(User user) {
		String sql = "select * from tb_tea_info where username = ? and password = ?";
		User user1 = this.getBean(sql, user.getUsername(),user.getPassword());
		return user1;
	}
	
	
//	public User getUserByUsernameAndPassword(String username, String password) {
//		User u = null ;
//		//JDBC: 获取连接  编写SQL 预编译SQL 设置参数  执行SQL 封装结果  关闭连接
//		// 获取连接
//		try {
//			Connection conn = ConnectionUtils.getConn();
//			
//			String sql ="select email, username, password from tb_stu_info where username = ? and password = ?";
//			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setString(1, username);
//			ps.setString(2, password);
//			
//			ResultSet  rs = ps.executeQuery();
//			
//			if(rs.next()) {
//				u = new User();
//				u.setUsername(rs.getString("username"));
//				u.setPassword(rs.getString("password"));
//				u.setPassword(rs.getString("email"));
//			}
//			
//			return u ; 
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}finally {
//			try {
//				ConnectionUtils.closeConn();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return null;
//	}
//	@Override
//	public User getUserByEmail(String email) {
//		User u = null ;
//		try {
//			Connection conn = ConnectionUtils.getConn();
//			
//			String sql ="select email, username, password from tb_stu_info where email = ?";
//			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setString(1, email);
//			ResultSet  rs = ps.executeQuery();
//			if(rs.next()) {
//				u = new User();
//				u.setUsername(rs.getString("username"));
//				u.setPassword(rs.getString("password"));
//				u.setPassword(rs.getString("email"));
//			}
//			return u ; 
//		} catch (Exception e) {
//			e.printStackTrace();
//		}finally {
//			try {
//				ConnectionUtils.closeConn();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//		return null;
//	}
//	
//	@Override
//	public void insertUser(String username, String password,String email) {
//		
//		try {
//			Connection conn = ConnectionUtils.getConn();
//			
//			String sql = "insert into tb_stu_info (username,password,email) values(?,?,?)";
//			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setString(1, username);
//			ps.setString(2, password);
//			ps.setString(3, email);
//			
//			ps.executeUpdate();
//			
//		} catch (Exception e) {
//			e.printStackTrace();
//		}finally {
//			try {
//				ConnectionUtils.closeConn();
//			} catch (Exception e) {
//				e.printStackTrace();
//			}
//		}
//	}
	
}