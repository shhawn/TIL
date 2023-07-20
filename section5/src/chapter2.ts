/** 
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  age: number;
  name: string; // 재정의를 해줄 때는 반드시 동일한 타입으로만! 서브타입도 안됨.
}

const person: Person = {
  name: 'shawn',
  age: 28
}

/** 
 * 모듈 보강
 */

interface Lib {
  a: string;
  b: string;
}

interface Lib {
  c: number; // 그럼 이렇게 따로 추가해주면 되지~
}

const lib: Lib = {
  a: 'a',
  b: 'b',
  c: 123 // c를 추가하려고 했는데 기존 Lib 모듈에는 c가 없네?
}