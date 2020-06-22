package kj.beans;

public class test {
	private String name;
	private String age;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "test [name=" + name + ", age=" + age + "]";
	}
	public test(String name, String age) {
		super();
		this.name = name;
		this.age = age;
	}
	public test() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
