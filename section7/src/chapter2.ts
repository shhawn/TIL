/** 
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map(it => it * 2);

// 타입스크립트에서 map은 이미 정의되어 있음.
function map<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2);
map(['hi', 'hello'], (it) => parseInt(it)); // map에서 반환되는 값은 어떤 타입이든 들어올 수 있어야 함. 따라서 타입 변수 U를 추가. 반환값의 타입을 U에 할당함.

/** 
 * forEach 메서드
 */

const arr2 = [1, 2, 3];
const newArr2 = arr2.forEach(it => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr2, it => console.log(it));
forEach(['1', '2'], it => it);