/** 
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
}

let person = {} as Person; // {}을 Person으로 간주하라
person.name = 'shawn';
person.age = 30;

type Dog = {
  name: string;
  color: string;
}

let dog = {
  name: '돌돌이',
  color: 'brown',
  breed: '진도' // 추가
} as Dog;

/** 
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // number는 never의 슈퍼 타입
let num2 = 10 as unknown; // number는 unknown의 서브 타입

// let num3 = 10 as string; 
let num4 = 10 as unknown as string; // 이렇게 할 수도 있긴 함 => 다중 단언 (좋은 방법X)

/** 
 * const 단언
 */

let num5 = 10 as const; // const로 선언한 것과 동일한 단언

let cat = {
  name: '야옹이',
  color: 'yellow'
 } as const; // readonly로 추론됨

/** 
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: '게시글1',
  author: 'shawn'
}

// const len: number = post.author?.length 오류
const len: number = post.author!.length; // null이거나 undefined이 아니야!