const table = document.querySelector(".calender-table");
// 기본 정보 - 윤달도 나중에 추가
const WEEKS = "일월화수목금토";
const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 오늘 입력 받고
const today = new Date();
const Year = today.getFullYear();
const Month = today.getMonth();
const Day = today.getDate();
const day_length = month_days[Month];
const day_one_weekday = new Date(Year, Month, 1).getDay();

// 달력출력
function calendar(today) {
  let currentRow; // 현재 행
  for (let i = 1; i <= day_length; i++) {
    // 달의 처음 시작일이 화 ~ 일인 경우, 공백 추가하기
    if (i === 1) {
      currentRow = document.createElement("tr");
      for (let j = 0; j < day_one_weekday - 1; j++) {
        const emptyCell = document.createElement("td");
        emptyCell.textContent = " ";
        currentRow.appendChild(emptyCell);
      }
    }

    // 날짜 추가
    const dayCell = document.createElement("td");
    dayCell.textContent = i;
    if (i === Day) {
      dayCell.setAttribute("class", "today");
    }
    currentRow.appendChild(dayCell);

    // 일요일인 경우 또는 마지막 날인 경우
    if ((day_one_weekday + i) % 7 === 1 || i === day_length) {
      table.appendChild(currentRow);
      // 새로운 주 시작
      if (i !== day_length) {
        currentRow = document.createElement("tr");
      }
    }
  }
}

calendar(today);
const calenderHeader = document.querySelector(".calender-header-h2");
calenderHeader.innerHTML = Year + "년 " + (Month + 1) + "월";
console.log(calenderHeader);
