function fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // 서버 응답을 JSON 형태로 파싱
        .then(data => {
            const tbody = document.querySelector('#dataTable tbody');
            tbody.innerHTML = ''; // 기존 데이터를 지우고 새 데이터로 초기화

            // 테이블의 각 행을 데이터로 채움
            data.forEach(user => {
                tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                </tr>
            `;
            });
        })
        .catch(error => console.error('Error:', error)); // 에러 처리
}

// 데이터 삭제 함수
function clearData() {
    const tbody = document.querySelector('#dataTable tbody');
    tbody.innerHTML = ''; // 테이블 데이터 삭제
}