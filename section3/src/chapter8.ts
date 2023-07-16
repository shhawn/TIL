/** 
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: 'ADMIN'; // 따라서, 이렇게 리터럴 string 타입을 선언해줌.
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}번 강퇴했습니다.
// Member -> {name}님 현재까지 {point}점 모았습니다.
// Guestt -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  if ('kickcount' in user) {

  } else if ('point' in user) {

  } else if ('visitCount' in user) {

  }
}

// 그런데 이렇게 in 연산자를 사용하면 이게 무슨 타입을 사용한다는건지 직관적으로 알기 어려움.

function login2(user: User) {
 switch (user.tag) {
  case 'ADMIN': {

  }
  case 'MEMBER': {

  }
  case 'GUEST': {

  }
 }
}

// 이렇게 tag 속성에 리터럴 타입으로 설정해주면 각 타입들은 서로소 유니온 타입이 된다.

/** 
 * 복습 겸 예시
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING';
}

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  }
}

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  }
}

type asyncTask = LoadingTask | SuccessTask | FailedTask;

function processResult(task: asyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('로딩중');
      break;
    }
    case 'SUCCESS': {
      console.log(`${task.response.data}`);
      break;
    }
    case 'FAILED': {
      console.log(`${task.error.message}`);
      break;
    }
  }
}

const loading: asyncTask = {
  state: 'LOADING',
}

const failed: asyncTask = {
  state: 'FAILED',
  error: {
    message: '오류는 ~~'
  },
}

const success: asyncTask = {
  state: 'SUCCESS',
  response: {
    data: '데이터는 ~~'
  }
}