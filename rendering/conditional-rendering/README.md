# Conditional Rendering

## What I Learned
### 1. AND-operator.js
- JS의 "&&" 표현식은 왼쪽(조건)이 true이면 오른쪽의 값을 반환한다. 그러나 조건이 false이면 전체 표현식이 false가 된다. React는 false를 null또는 undefined와 같이 간주하고 그 자리에 아무것도 렌더링하지 않는다.
- "&&"의 왼쪽에 숫자를 두면 안된다. 왼쪽이 0이면 전체식이 0을 얻게 되고, React는 아무것도 아닌 0을 렌더링 한다. 
- 조건을 테스트하기 위해 JS는 자동으로 왼쪽을 부울로 변환한다. 

