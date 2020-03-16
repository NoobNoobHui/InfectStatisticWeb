package infectstatistic.pojo;

public class Province {
    private String name;//省份名字
    private String date;//日期
    private int ip;//感染者
    private int sp;//疑似患者
    private int cure;//治愈
    private int dead;//死亡
    public Province(){
        this.name = null;
        this.ip = 0;
        this.sp = 0;
        this.cure = 0;
        this.dead = 0;
    }
    
}
