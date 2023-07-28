/** 
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;
type ReturnType<T> = T extends () => string ? string : never;

type A = ReturnType<FuncA>; // string
// () => string과 () => string은 서로 같은 타입이기 때문에 string

type B = ReturnType<FuncB>; // never
// () => number와 () => string은 서로 서로소 타입이기 때문에 never


type ReturnType2<T> = T extends () => infer R ? R : never;
type C = ReturnType2<FuncA>;
type D = ReturnType2<FuncB>;
// infer R은 일단 타입 변수 R이라고 생각하기.
// T가 () => string이고 비교하는 함수가 () => infer R일 때,
// () => string과 () => infer R이 서로 참이 되도록 추론됨.
// string과 참이 되는 관계는 string이므로 R은 string으로 추론.

type E = ReturnType2<number>;
// number와 () => infer R은 서로 어떻게 해도 서브타입이 될 수 없기 때문에 never가 됨.


/** 
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
type PromiseA = PromiseUnpack<Promise<number>>;
type PromiseB = PromiseUnpack<Promise<string>>;
// T에 Promise<number>가 들어옴.
// Promise<number>가 Promise<infer R>의 서브 타입이 될 수 있는 타입을 추론함.
// R은 number가 됨.