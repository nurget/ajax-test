# AJAX 데이터 가져오기 예제

## 단계별 설명
### 1. AJAX 요청 초기화
   - 함수: fetchData()
   - 설명: 이 함수는 AJAX 요청을 시작하기 위해 호출되고 지정된 URL에서 데이터를 요청하기 위해 fetch 함수를 사용해용
   - URL: https://jsonplaceholder.typicode.com/users
     - 이 URL은 테스트 API!!

### 2. 응답 처리
- .then(response => response.json()) 
  - fetch가 완료되면 응답이 JSON 형태로 파싱해요, response.json() 메서드는 파싱된 JSON 데이터로 해결되는 Promise를 반환합니당
- .then(data => {...})
  - 파싱된 데이터는 사용자 객체의 배열로 다음 핸들러에 전달 되구요, 여기서 데이터 처리 같은 것들이 진행됩니다!!

### 3. 테이블 데이터 삽입
- 선택: document.querySelector('#dataTable tbody')
- 설명: querySelector를 사용하여 데이터 테이블 tbody에 동적으로 데이터를 생성합니당
- 데이터 처리:
  - 가져온 데이터는 data.forEach(user => {...})를 사용하여 반복 처리됩니당
  - 각 사용자의 정보(id, 이름, 이메일)는 템플릿 리터럴을 사용하여 테이블 행으로 형식화되고 테이블의 tbody에 삽입하게 됩니다ㅏ