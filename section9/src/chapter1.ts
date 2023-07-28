/** 
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<string>; // number

// 조건부 타입에 유니온 타입을 넣어버리면 분산적인 조건부 타입이 된다.
// 유니온 타입이 그대로 T에 들어가는 것이 아니라 하나씩 분리돼서 들어감.
let c: StringNumberSwitch<number | string>; // string | number

let d: StringNumberSwitch<boolean | number | string>;
// StringNumberSwitch<boolean> -> number
// StringNumberSwitch<number> -> string
// StringNumberSwitch<string> -> number
// 결과는 number | string 타입이 나옴.

/** 
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// T자리에 number, string, boolean이 차례대로 들어옴.
// U자리에는 string 고정.
// 결과값은 number | never | boolean
// never는 공집합이기 때문에 생략 가능.

type Extract<T, U> = T extends U ? T : never; // string 타입만 추출
type B = Extract<number | string | boolean, string>;


// 분산을 방지하는 방법 -> 대괄호를 씌우면 된다.
type Exclude2<T, U> = [T] extends [U] ? never : T;
// 그러면 T자리에 하나씩 들어오는 게 아니라 유니온 타입으로 한 번에 들어옴
