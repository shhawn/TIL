/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법은
// JS : 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기하는 것
// TS : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기하는 것
function func(a: number, b: number): number {
  return a + b; // 결과값의 타입을 적지 않아도 자동으로 추론해줌
}

// 화살표 함수의 타입을 정의하는 방법
const add = (a: number, b: number): number => a + b;

/** 
 * 함수의 매개변수
 */

// 선택적 매개변수는 꼭 필수 매개변수 뒤에 위치해야 한다.
function introduce(name = "김승환", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === 'number') {
    console.log(`tall: ${tall + 10}`);
  }
}

introduce(); // tall은 선택적 매개변수이기 때문에 꼭 없어도 된다. 
// name의 기본값이 "김승환"이므로 인수에 아무것도 안 넣어도 김승환이 출력된다.

introduce('김승환', 175);

// ...rest의 타입은 배열로 선언해준다.
function getSum1(...rest: number[]) {
  let sum = 0;
  rest.forEach(it => sum += it);

  return sum;
}

// rest의 length도 정하고 싶다면 튜플 타입으로 만들어줄 수도 있다.
function getSum2(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach(it => sum += it);

  return sum;
}

getSum1(1, 2, 3); // 6
getSum1(1, 2, 3, 4, 5); // 15
