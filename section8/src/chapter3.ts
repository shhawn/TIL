/** 
 * 맵드 타입
 * -> 인터페이스에서는 사용 불가. 타입 별칭에서 사용해야 함.
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 선택적 매개변수를 만들기 위해 중복되는 인터페이스를 만드는 건 비효율적임!
// interface PartialUser {
//   id?: number;
//   name?: string;
//   age?: number;
// }

// in 뒤에는 객체의 key가 온다.
type PartialUser = {
  [key in 'id' | 'name' | 'age']? : User[key];
}

// 이런 식으로 모든 프로퍼티의 타입이 같은 객체 타입을 만들 수도 있다.
type BooleanUser = {
  [key in 'id' | 'name' | 'age'] : boolean;
}

// 만약 모든 프로퍼티의 키를 적기 귀찮다면?
type AnyUser = {
  [key in keyof User]: User[key];
}

// readonly 속성을 주고 싶다면?
type readonlyUser = {
  readonly [key in keyof User]: User[key];
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...기능
  return {
    id: 1,
    name: '김승환',
    age: 30
  }
}

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
  // ...기능
}

updateUser({
  // id: 1,
  // name: '김승환',
  // 수정하고 싶은 프로퍼티만 넣어주고 싶음 -> PartialUser라는 선택적 프로퍼티 타입 만듦
  // 그런데 굳이 PartialUser라고 따로 만들어 줄 필요가 있을까? User와 너무 중복됨!
  age: 25
})