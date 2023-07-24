/** 
 * 제네릭
 */
// 제네릭 함수 : 함수의 인수에 따라서 반환값의 타입을 가변적으로 정해줄 수 있다.
// 모든 타입에 두루두루 쓸 수 있는 범용적인 함수

// 여기서 T는 타입 변수
// 매개변수 타입이 T에 담김.
function func<T>(value: T): T {
  return value;
}

let num = func(10);
let str = func('str');
let bool = func(true);
let arr1 = func([1, 2, 3]);
// 만약 arr이 number[]이 아니라 튜플 타입으로 바꿔주고 싶다면?
let arr2= func<[number, number, number]>([1, 2, 3]);