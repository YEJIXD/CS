// 2. 실제 싱글톤 패턴
class Singleton {
    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = this
        }
        return Singleton.instance
    }

    getInstance(){
        return this.instance()
    }
}

const a = new Singleton()
const b = new Singleton()
console.log(a === b)        // true
/* 앞의 코드는 Singleton.instance라는 하나의 인스턴스를 가지는 Singleton 클래스를 구현한 코드이다. 이를 통해 a와 b는 하나의 인스턴스를 가진다. */
