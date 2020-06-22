package kj.beans;

public class Course {
	private String course_id;
	private String course_name;
	private String tea_username;
	private String tea_name;
	private String subject;
	private String college;
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	public String getTea_username() {
		return tea_username;
	}
	public void setTea_username(String tea_username) {
		this.tea_username = tea_username;
	}
	public String getTea_name() {
		return tea_name;
	}
	public void setTea_name(String tea_name) {
		this.tea_name = tea_name;
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
		return "Course [course_id=" + course_id + ", course_name=" + course_name + ", tea_username=" + tea_username
				+ ", tea_name=" + tea_name + ", subject=" + subject + ", college=" + college + "]";
	}
	public Course(String course_id, String course_name, String tea_username, String tea_name, String subject,
			String college) {
		super();
		this.course_id = course_id;
		this.course_name = course_name;
		this.tea_username = tea_username;
		this.tea_name = tea_name;
		this.subject = subject;
		this.college = college;
	}
	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	

}
