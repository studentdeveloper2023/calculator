const input = document.getElementById("input"); // input 요소 가져오기
const buttons = document.querySelectorAll("button"); // 모든 버튼 요소 가져오기

// 버튼 클릭 이벤트 처리
buttons.forEach(button => {
  button.addEventListener("click", () => {
    // "C" 버튼 클릭 -> 입력창 초기화
    if (button.id === "c") {
      input.value = "";
    }
    // "=" 버튼 클릭 -> 수식 계산 후 결과 출력
    else if (button.id === "equal") {
      try {
        input.value = eval(input.value); // eval 함수를 이용해 문자열로 된 수식 계산
      } catch (error) {
        input.value = "Error"; // 계산 중 문제 발생 시 "Error" 표시
      }
    }
    // 기타 버튼 클릭 -> 해당 버튼의 텍스트 또는 기호 추가
    else {
      input.value += button.textContent;
    }
  });
});
