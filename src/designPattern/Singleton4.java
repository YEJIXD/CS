package designPattern;

class Singleton {
    private static class singleInstanceHolder {
        private static final Singleton4 INSTANCE = new Singleton4();
    }

    public static Singleton4 getInstance(){
        return singleInstanceHolder.INSTANCE;
    }
}

public class Singleton4 {
    public static void main(String[] args) {
        Singleton4 a = Singleton.getInstance();
        Singleton4 b = Singleton.getInstance();

        System.out.println(a.hashCode());
        System.out.println(b.hashCode());

        if(a == b) {
            System.out.println(true);
        }
    }
}
