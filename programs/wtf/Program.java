package ovh.mvasilkov.java.wtf;

public class Program {
    public static void main(String[] args) {
        // region main
        Object a = true ? 'a' : new Float(1);
        System.out.println(a);
        System.out.println(a.getClass());
        // endregion
    }
}
