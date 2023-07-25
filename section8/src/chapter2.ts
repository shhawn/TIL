/** 
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: '김승환',
  age: 30
}

// key: "name" | "age"로 하면 되긴 하지만, 문제가 많음
// keyof는 Person 타입으로 부터 모든 프로퍼티의 키를 union 타입으로 추출함
// typeof를 잘 활용하면 key: keyof typeof person으로 쓸 수도 있음
function getPropertyKey(person: Person, key: keyof Person) {
  console.log(person[key]);
}


// typeof를 타입으로 쓰면 어떤 변수의 타입을 뽑아내는 용도로도 사용할 수 있음.
// typeof를 잘 활용하면 굳이 객체 타입 인터페이스를 정하지 않아도 될 것 같음.
// => 어차피 'typeof 객체'하면 객체의 타입을 바로 뽑아올 수 있으니까. (인터페이스 생성과 같은 역할)
let person2 = {
  name: 'aaa',
  age: 30
}
type Person2 = typeof person2;
