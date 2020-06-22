package kj.beans;

public class Score {
	private String stu_username;
	private String course_id;
	private String score;
	private String classid;
	private String subject;
	private String college;
	private String course_name;
	private String name;
	
	
	public String getStu_username() {
		return stu_username;
	}
	public void setStu_username(String stu_username) {
		this.stu_username = stu_username;
	}
	public String getCourse_id() {
		return course_id;
	}
	public void setCourse_id(String course_id) {
		this.course_id = course_id;
	}
	public String getScore() {
		return score;
	}
	public void setScore(String score) {
		this.score = score;
	}
	public String getClassid() {
		return classid;
	}
	public void setClassid(String classid) {
		this.classid = classid;
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
	public String getCourse_name() {
		return course_name;
	}
	public void setCourse_name(String course_name) {
		this.course_name = course_name;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		return "Score [stu_username=" + stu_username + ", course_id=" + course_id + ", score=" + score + ", classid="
				+ classid + ", subject=" + subject + ", college=" + college + ", course_name=" + course_name + ", name="
				+ name + "]";
	}
	public Score(String stu_username, String course_id, String score, String classid, String subject, String college,
			String course_name, String name) {
		super();
		this.stu_username = stu_username;
		this.course_id = course_id;
		this.score = score;
		this.classid = classid;
		this.subject = subject;
		this.college = college;
		this.course_name = course_name;
		this.name = name;
	}
	public Score() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
	
	
}
