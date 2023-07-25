/** 
 * 템플릿 리터럴 타입
 * 문자열로 여러 가지 상황들을 표현해야 하는 경우에 유용하게 사용될 수 있음.
 * 하지만, 실제로 사용되는 경우가 드물기 때문에 그렇게 중요하지는 않음.
 * 뭔가 특정 문자열만 적어야 되는 경우 사용하면 좋을 것 같음.
 */

type Color = 'red' | 'black' | 'blue';

type Animal = 'dog' | 'cat' | 'chicken';

type ColorAnimal = `${Color}-${Animal}`;

const colorAnimal: ColorAnimal = 'black-cat';