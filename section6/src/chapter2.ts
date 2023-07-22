/** 
 * 접근 제어자
 * access modifier
 * => public private protected
 */

class Employee {
  public name: string; // 디폴트 값으로 public이 앞에 붙어 있음.
  private age: number; // 클래스 내부에서만 접근 가능. 외부에서는 불러올 수 없음. 파생 클래스에서도 사용 불가능
  protected position: string; // 클래스 내부에서만 접근 가능. 그러나 파생 클래스에선 사용 가능.
  
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일함');
  }
}

class Test3 extends Employee {
  year: number;

  constructor (name: string, age: number, position: string, year: number) {
    super(name, age, position);
    this.year = year;
  }

  sayHi() {
    // console.log(`My age is ${this.age}`); private라서 사용 불가
  }
}

const employeeA = new Employee('김승환', 30, '개발자');
employeeA.name = '홍길동';
// employeeA.age = 20;
// employeeA.position = '디자이너';


// 이런 식으로 constructor 매개변수에 접근 제어자를 넣어주면 필드나 this.name = '' 같은 것을 생략할 수도 있음.
class Test {
  constructor(private name: string, public age: number) {}
  say() {
    console.log(`hi. my name is ${this.name}`);
  }
}

const test1 = new Test('Shawn', 25);
// test1.name = 'lee';
