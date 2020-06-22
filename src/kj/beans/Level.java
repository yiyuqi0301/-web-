package kj.beans;

public class Level {
	private String level;
	private String level_name;
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	public String getLevel_name() {
		return level_name;
	}
	public void setLevel_name(String level_name) {
		this.level_name = level_name;
	}
	@Override
	public String toString() {
		return "Level [level=" + level + ", level_name=" + level_name + "]";
	}
	
}
