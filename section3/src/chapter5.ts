/** 
 * 타입 추론
 */

let a = 10; // 자동으로 변수의 타입을 추론
let b = 'hello';
let c = {
  id: 1,
  name: 'kim',
  profile: {
    nickname: 'shawn'
  }
}

let { id, name, profile } = c;

let [one, two, three] = [1, 'a', true];

function func() {
  return 'hello'; // 함수는 리턴값으로 추론
}


// any 타입의 진화 (초기값이 없는 경우)
let d; // any 타입 => 암묵적 any 타입 (추천X)

d = 10; // number 타입으로 변함
d.toFixed(); 

d = 'hello'; // String 타입으로 변함
d.toUpperCase(); 


const num = 10; // 어차피 상수이기 때문에 리터럴 타입으로 추론이 됨

let arr = [1, 'string']; // Union 타입으로 자동 추론


