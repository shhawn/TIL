// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  favorite: string;
  color: string;
}

let user: User = {
  id: 1,
  name: '김승환',
  nickname: 'shawn',
  birth: '1994.07.29',
  favorite: 'take a picture',
  color: 'skyblue'
}

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string
}

const countryCodes: CountryCodes = {
  korea: 'ko',
  unitedStates: 'us',
  japan: 'jp'
}

type CountryNumberCodes = {
  [key: string]: number;
  // Korea: string; 인덱스 시그니처 value 타입과 일치해야 함.
  Korea: number; // 반드시 Korea 프로퍼티는 포함시켜야 할 때.
}

const countryNumberCodes: CountryNumberCodes = {
  Korea: 410
}