/** 
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/** 
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean; // 추가할 수 있는 타입은 무한대
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string;
}

type Union1 = Dog | Person

let union1: Union1 = {
  name: '',
  color: '',
}

let union2: Union1 = {
  name: '',
  language: '',
}

let union3: Union1 = {
  name: '',
  color: '',
  language: ''
}

// let union4: Union1 = {
//   name: ''
// } 

/** 
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string; // 교집합이 없기 때문에 never 타입이 됨 (대부분의 기본 타입)

type Intersection = Dog & Person;

let intersection: Intersection = { // Dog 타입과 Person 타입의 모든 프로퍼티를 갖고 있어야 함
  name: '',
  color: '',
  language: ''
}

