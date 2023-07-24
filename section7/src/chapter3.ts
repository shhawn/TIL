/** 
 * 제네릭 인터페이스
 * 하나의 인터페이스로 다양한 타입의 객체를 표현할 수 있음
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용할 때에는 타입 변수에 할당할 타입을 꺽쇠에 함께 반드시 사용해야 한다.
let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['1']
}

/** 
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let number1: NumberMap = {
  key: 123,
  key2: 4332
}

interface Map<V> {
  [key: string]: V;
}

let strMap: Map<string> = {
  key: '123'
}

let numMap: Map<number> = {
  key: 123
}

/** 
 * 제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
}

let map2: Map2<string> = {
  key: '123'
}

/** 
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 학생 유저 / 개발자 유저
 */

interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  // profile: Student | Developer;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== 'student') {
  //   console.log('잘못 오셨습니다.');
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

let developerUser: User<Developer> = {
  name: '김승환',
  profile: {
    type: 'developer',
    skill: 'typescript'
  }
}

let studentUser: User<Student> = {
  name: '홍길동',
  profile: {
    type: 'student',
    school: 'univ'
  }
}