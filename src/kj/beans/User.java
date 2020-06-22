package kj.beans;

public class User {
	
	private String username ; 
	private String password ;
	private String email;
	private String name;
	private String college;
	private String subject;
	private String level;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", name=" + name
				+ ", college=" + college + ", subject=" + subject + ", level=" + level + "]";
	}
	
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public User(String username, String password, String email, String name, String college, String subject,
			String level) {
		super();
		this.username = username;
		this.password = password;
		this.email = email;
		this.name = name;
		this.college = college;
		this.subject = subject;
		this.level = level;
	}

	
	
}
