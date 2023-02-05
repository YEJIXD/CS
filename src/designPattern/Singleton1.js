// JavsScript의 Singleton Pattern 구현하기

// 1. JS : Literal {} 또는 new Object로 객체를 생성하게 되면 다른 어떤 객체와 같지 않기 때문에 이 자체만으로 싱글톤 패턴을 구현할 수 있다.
const obj = {
    a : 27
}

const obj2 = {
    a : 27
}

console.log(obj === obj2)       // false (=obj와 obj2는 다른 인스턴스를 가짐)
/* 이 또한 new Object라는 클래스에서 나온 단 하나의 인스턴스니 어느 정도 싱글톤 패턴이라 볼 수 있지만, 실제 싱글톤 패턴은 보통 Singleton2와 같다.*/



