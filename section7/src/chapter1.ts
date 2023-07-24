/** 
 * 첫 번째 사례
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2); // T에는 '1'의 String 타입이 먼저 할당됨. 이럴 때는 타입 변수를 따로따로 줘야 한다.

/** 
 * 두 번째 사례
 */

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0]; // unknown 타입이기 때문에 [0]을 쓸 수 없음. T[] 배열 타입으로 바꿔주기.
}

let num = returnFirstValue([1, 2, 3]); // 1
let str = returnFirstValue([1, 'str', 'hel']); // str은 union 타입.
// union 타입이 아닌 0번 째 인덱스 타입을 따르게 하고 싶다면 data 매개변수를 튜플로 바꿔줘야 함.
// function returnFirstValue<T>(data: [T, ...unknown[]])
// ...rest처럼 첫 번째 인덱스말고 뒤에 오는 애들은 타입이나 갯수 모두 아무것도 알고 싶지 않음.

/** 
 * 세 번째 사례
 */

function getLength(data: any) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength(10);

// data가 any 타입이기 때문에 length 프로퍼티가 없는 number 타입도 들어가게 됨.
// data 타입을 length가 있는 타입들로만 제한하고 싶음.
// function getLength<T extends { length: number }>(data: T) {...}
// 이렇게 하면 length가 number 타입으로 있는 타입으로 확장
// { length: number }인 타입으로 확장했기 때문에 무조건 length 프로퍼티가 있어야 함.

