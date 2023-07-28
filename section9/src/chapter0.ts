/** 
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjA = {
  a: number;
}

type ObjB = {
  a: number;
  b: number;
}

type B = ObjB extends ObjA ? number : string;

/** 
 * 제네릭과 조건부 타입
 * -> 조건부 타입은 제네릭에 써야지 효과가 좋음
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpace<T>(text: T): T extends string ? string : undefined
function removeSpace (text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpace('Hi Im Shawn');
let result2 = removeSpace(undefined);
