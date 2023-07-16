// object
let user: {
  id?: number; // 선택적 프로퍼티
  name: string;
} = {
  id: 1,
  name: '홍길동'
}

user = {
  name: 'shawn'
}

let config: {
  readonly api_key: string;
} = {
  api_key: 'MY API KEY'
}

// config.api_key = 'dadad'; // 불가