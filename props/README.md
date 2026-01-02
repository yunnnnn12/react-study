# Props

## What I Learned
- props는 JSX 태그에 전달하는 정보이다.
- props를 선언할 때 ()및 {}쌍을 유의해야 한다.  
- 값이 지정되지 않았을 때, 변수 바로 뒤에 "="과 함께 기본값을 넣어 구조 분해 할당이 가능하다. 
- size prop이 없이 렌더링 된다면 size는 100으로 설정된다.
- 이 기본값은 size prop이 없거나 size={undefined}로 전달될 때 사용된다. 그러나 size={null} 또는 size={0}으로 전달된다면, 기본값은 사용되지 않는다.
- props는 불변성을 가지고 있다. 변경할 수 없다.


