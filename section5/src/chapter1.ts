/** 
 * 인터페이스의 확장
 * 객체 타입에서는 타입 별칭보다는 interface를 사용
 */

type Animal = { // interface가 아닌 type도 확장 가능. 인터페이스는 객체 타입이면 확장 가능.
  name: string;
  age: number;
}

interface Dog extends Animal {
  // name: string; 
  // age: number;
  isBark: boolean;
  // name: 'hello'; // 재정의 가능. 원본 타입의 서브 타입만 가능.
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = { // 다중 확장도 가능
  name: '',
  age: 5,
  isBark: true,
  isScratch: true
}