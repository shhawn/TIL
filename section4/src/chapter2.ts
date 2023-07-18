/** 
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가 판단하는 것
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; B는 숫자 리터럴 타입, A는 숫자 타입. 숫자 리터럴 타입에 숫자 타입을 넣을 수 없음.

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때 : 업 캐스팅이 안 되고 다운 캐스팅이 됨.
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; C 타입은 number 타입, D 타입은 리터럴 number 타입. => 업 캐스팅인데 안됨.
d = c;

type Animal = {
  name: string;
}

type Dog = {
  name: string;
  color: string;
}

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
}

// animalFunc = dogFunc; animal이 슈퍼 타입, dog가 서브 타입이므로 업 캐스팅
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color); Animal에는 color라는 속성이 없음
  // 업 캐스팅을 허용하면 위와 같은 코드가 만들어지기 때문에 업 캐스팅을 막는 것
}

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
}

// 2-2. 매개변수의 개수가 다를 때 : 매개변수 많은 애가 슈퍼 타입
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 매개변수의 개수가 할당하려는 함수의 매개변수보다 더 적을 때에만 호환이 가능

// 나만의 정리
// 기존에 객체에서는 프로퍼티 갯수가 더 적은 게 슈퍼 타입이라고 했지만,
// 함수에서는 반대임. 더 적은 게 슈퍼 타입이 되버리면 없는 프로퍼티에 접근할 수 있게 되므로 코드가 망가짐.

type Test1 = {
  name: string;
}

type Test2 = {
  name: string;
  address: string;
}

let obj1: Test1 = {
  name: 'shawn'
}

let obj2: Test2 = {
  name: 'shawn',
  address: 'seoul'
}

obj1 = obj2;
// obj2 = obj1; obj1이 슈퍼 타입이기 때문에

let func3 = (value: Test1) => {
  console.log(value.name);
}

let func4 = (value: Test2) => {
  console.log(value.name);
}

// func3 = func4; 함수에서는 Test1이 서브 타입. Test2가 슈퍼 타입이 됨.
func4 = func3;