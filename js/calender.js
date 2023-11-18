const table = document.querySelector(".calender-table");
// 기본 정보 - 윤달도 나중에 추가
const WEEKS = "일월화수목금토";
const month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// 오늘 입력 받고
const today = new Date();
const today_Year = today.getFullYear();
const today_Month = today.getMonth();
const today_Day = today.getDate();
const today_day_length = month_days[today_Month];
const today_day_one_weekday = new Date(today_Year, today_Month, 1).getDay();
// 현재 달력 날짜관련
let curYear = today_Year;
let curMonth = today_Month;
let curDay = today_Day;
let curday_length = today_day_length;
let curday_one_weekday = today_day_one_weekday;

// 테이블 헤더 추가 함수
function addTableHeader() {
  // 요일 헤더를 포함한 새로운 행 생성
  const headerRow = document.createElement("tr");

  // 요일 헤더 생성 및 스타일 지정
  const weekdays = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const headerStyles = ["", "", "", "", "", "color: blue", "color: red"];

  for (let i = 0; i < weekdays.length; i++) {
    const th = document.createElement("th");
    th.textContent = weekdays[i];
    th.setAttribute("style", headerStyles[i]);
    headerRow.appendChild(th);
  }

  // 테이블에 헤더 행 추가
  table.appendChild(headerRow);
}
// 달력출력
function calendar(date) {
  addTableHeader();
  const Year = date.getFullYear();
  const Month = date.getMonth();
  const Day = date.getDate();
  const day_length = month_days[Month];
  const day_one_weekday = new Date(Year, Month, 1).getDay();
  let currentRow; // 현재 행
  for (let i = 1; i <= day_length; i++) {
    // 달의 처음 시작일이 화 ~ 일인 경우, 공백 추가하기
    if (i === 1) {
      currentRow = document.createElement("tr");
      for (
        let j = 0;
        j < (day_one_weekday - 1 !== -1 ? day_one_weekday - 1 : 6);
        j++
      ) {
        const emptyCell = document.createElement("td");
        emptyCell.textContent = " ";
        currentRow.appendChild(emptyCell);
      }
    }

    // 날짜 추가
    const dayCell = document.createElement("td");
    dayCell.textContent = i;
    if (i === today_Day && Month === today_Month && Year === today_Year) {
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
  const calenderHeader = document.querySelector(".calender-header-h2");
  calenderHeader.innerHTML = curYear + "년 " + (curMonth + 1) + "월";
  console.log(calenderHeader);
}
function past() {
  curMonth = curMonth - 1;
  curday_length = month_days[curMonth];
  curday_one_weekday = new Date(curYear, curMonth, 1).getDay();
  const curDate = new Date(curYear, curMonth, 1);

  // 기존의 달력 테이블 내용 삭제
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  // 수정된 달력 출력
  calendar(curDate);
}
function future() {
  curMonth = curMonth + 1;
  curday_length = month_days[curMonth];
  curday_one_weekday = new Date(curYear, curMonth, 1).getDay();
  const curDate = new Date(curYear, curMonth, 1);

  // 기존의 달력 테이블 내용 삭제
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  // 수정된 달력 출력
  calendar(curDate);
}

calendar(today);
