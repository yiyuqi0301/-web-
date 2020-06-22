package kj.beans;

public class SelectCourse {
	private Integer id;
	private String course_id;
	private String username;
	private String subject;
	private String college;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getCollege() {
		return college;
	}
	public void setCollege(String college) {
		this.college = college;
	}
	@Override
	public String toString() {
		return "SelectCourse [id=" + id + ", course_id=" + course_id + ", username=" + username + ", subject=" + subject
				+ ", college=" + college + "]";
	}
	public SelectCourse(Integer id, String course_id, String username, String subject, String college) {
		super();
		this.id = id;
		this.course_id = course_id;
		this.username = username;
		this.subject = subject;
		this.college = college;
	}
	public SelectCourse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
