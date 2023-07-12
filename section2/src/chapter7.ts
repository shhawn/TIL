// void
// void -> 공허 -> 아무것도 없음을 의미

function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
}

let a: void;
// a = 1; 아무것도 담을 수 없다.
a = undefined;

// never
// never -> 존재하지 않는 -> 불가능한

function abc(): never {
  while(true) {} // 무한 루프이므로 무언가를 반환할 수 없음
}

function cde(): never {
  throw new Error(); // 에러 메세지는 가능
}