/** 
 * Partial<T>
 * 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 직접 구현해보기
type Partical<T> = {
  [key in keyof T]?: T[key]; 
};

const draft: Partial<Post> = {
  title: '나중에 짓자',
  content: '초안...'
  // 선택적 프로퍼티로 모두 변했기 때문에 필요한 프로퍼티만 넣어도 됨
}

/** 
 * Required<T>
 * 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
  // 프로퍼티가 하나라도 없으면 에러 출력
}

/** 
 * Readonly<T>
 * 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
}

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글입니다.',
  tags: [],
  content: ''
};

// readonlyPost.content = '';
// readonly 속성이기 때문에 재할당 할 수 없음