/** 
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

// 만약에 사칙연산처럼 함수의 형태가 똑같은 경우 함수 타입 별칭을 만들어놓고 쓰면 편하다.
const add: (a: number, b: number) => number = (a, b) => a + b;
// 타입 별칭 자리에 아예 함수 타입 표현식을 가져다가 써도 무방하다.
// 매개변수의 갯수도 정해놓았기 때문에 매개변수도 함부로 늘리지 못한다.
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/** 
 * 호출 시그니쳐 (콜 시그니쳐) : 함수 타입 표현식과 동일한 기능을 한다.
 */

type Operation2 = {
  (a: number, b: number): number
}
// 마치 객체처럼 보이는 이유는 함수도 객체이기 때문

const add2: Operation2 = (a, b) => a + b;