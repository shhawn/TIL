// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar: any = 10;
anyVar = 'hello';
anyVar = true;
anyVar = [];
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = 'hello';
// num = unknownVar; 불가능