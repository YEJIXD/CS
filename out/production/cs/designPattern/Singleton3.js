// 3. 데이터 베이스 연결 모듈
const URL = 'mongodb://localhos:27017/kundalpp'
const createConnection = url => ({"url" : url})
class DB {
    constructor(url) {
        if(!DB.instance) {
            DB.instance = createConnection(url)
        }
        return DB.instance
    }

    connect(){
        return this.instance
    }
}

const a = new DB(URL)
const b = new DB(URL)
console.log(a === b)        // true
/* DB.instance라는 하나의 인스턴스를 기반으로 a, b를 생성 > 이를 통해 DB 연결에 관한 인스턴스 생성 비용을 아낄 수 있다.*/
