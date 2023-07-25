/** 
 * 인덱스드 엑세스 타입
 * -> 인덱스를 이용해서 다른 타입 내에 특정 프로퍼티의 타입을 추출하는 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  }
}

// 프로퍼티의 타입이 추가되거나 수정되더라도 즉시 반영해주기 때문에 원본 타입이 수정되더라도 우리가 별도로 할 일 없음
// ['author']를 인덱스라고 함. 타입만 올 수 있음.
// ['author']['id']처럼 이중으로 올 수 있음.
function getAuthor(author: Post['author']) {
  console.log(`${author.id}-${author.name}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '김승환'
  }
}

// 튜플을 이용하는 방법
type Tup = [number, string, boolean];

type Tup1 = Tup[0];
type Tup2 = Tup[1];
type Tup3 = Tup[2];