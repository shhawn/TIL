/** 
 * 프로미스
 * 제네릭 클래스를 기반으로 선언되어 있기 때문에 타입 변수로 비동기 처리의 결과값의 타입을
 * 정의해줄 순 있지만, 반대로 실패했을 때의 타입은 정해줄 수 없다.
 * 타입 변수 정의를 빼먹으면 기본적으로는 비동기 처리의 결과값의 타입이 unknown으로 추론된다.
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject('~~때문에 실패');
  }, 3000);
})

// promise는 비동기 작업의 결과값의 타입을 자동으로 추론X
promise.then(response => {
  console.log(response); // 20
})

promise.catch(err => {
  if (typeof err === 'string') {
    console.log(err);
  }
})

/** 
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '게시글 내용'
      })
    }, 3000)
  })
}

const postRequest = fetchPost();
postRequest.then(post => {
  post.id;
})