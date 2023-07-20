/** 
 * 인터페이스
 */

interface Person {
  name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

// 타입 별칭과 달리 union이나 intersection을 못씀

const person: Person = {
  name: '김승환',
  sayHi: function () {
    console.log('Hi');
  }
}

person.sayHi();
person.sayHi(1, 3);