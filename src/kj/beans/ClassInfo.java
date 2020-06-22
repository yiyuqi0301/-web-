package kj.beans;

public class ClassInfo {
	private String classid;
	private String subject;
	private String college;
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
	@Override
	public String toString() {
		return "ClassInfo [classid=" + classid + ", subject=" + subject + ", college=" + college + "]";
	}
	public ClassInfo(String classid, String subject, String college) {
		super();
		this.classid = classid;
		this.subject = subject;
		this.college = college;
	}
	public ClassInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
