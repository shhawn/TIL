/** 
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */

type Person = {
  name: string;
  age: number;
}

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  value; // 타입 가드 없이 쓰면 union 타입
  
  if (typeof value === 'number') { // 타입 가드
    console.log(value.toFixed()); // number 타입을 보장하기 때문에 union 타입에서 number 타입으로 변함 (타입 좁히기)
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) { // value가 Date 객체냐? 
    console.log(value.getTime());
  } else if (value && 'age' in value) { // A instanceof B 에서 B 자리에는 타입이 올 수 없다.
    console.log(`${value.name}은 ${value.age}살 입니다.`); // in 뒤에는 null이나 undefined가 올 수 없다.
  }
}

