package ovh.mvasilkov.java.quine;

public class Program {
    public static void main(String[] args) {
        String a = "package ovh.mvasilkov.java.quine;%11$c%11$cpublic class Program {%11$c";
        String b = "    public static void main(String[] args) {%11$c";
        String c = "        String %c = %12$c%s%12$c;%11$c";
        String d = "%11$c        System.out.printf(a + b + c + c + c + c + c + d + z, ";
        String z = "'a', a, 'b', b, 'c', c, 'd', d, 'z', z, 0xa, 0x22);%11$c    }%11$c}%11$c";

        System.out.printf(a + b + c + c + c + c + c + d + z, 'a', a, 'b', b, 'c', c, 'd', d, 'z', z, 0xa, 0x22);
    }
}
