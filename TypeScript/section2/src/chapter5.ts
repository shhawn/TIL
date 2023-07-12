// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 위에서 부터 자동으로 0번 ~
// 맨 위를 10이라고 하면 아래 값들은 자동으로 +1씩 할당됨
enum Role {
  ADMIN = 10,
  USER,
  GUEST
}

enum Language {
  KOR = 'ko'
}

const user1 = {
  name: 'shawn',
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.KOR
}

const user2 = {
  name: '홍길동',
  role: Role.USER // 1 <- 일반 유저
}

const user3 = {
  name: '아무개',
  role: Role.GUEST // 2 <- 게스트
}