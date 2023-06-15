// API -> 레스토랑
// 손님 -> 주문 -> 웨이터(서버) -> 찾기 -> 냉장고
// => 가져오기 => 웨이터(서버) -> 음식서빙 -> 손님 먹어

// 손님 (CLIENT)
// 웨이터(SERVER)
// 냉장고(DATABASE)

// 주문 (Request) 데이터요청
// 찾기 (Query) 데이터 검색
// 조리 (Query Result) 데이터 찾기
// 서빙 (Response) 요청데이터 전달

// 클라이언트와 서버사 데이터를 요청하고 전달받는 행위를 API 호출이라한다.

// API 호출과 함수는 데이터를 요청해서 받는다는 측면에서 유사하다.
// 단, API호출은 데이터를 언제 전달받을지 모른다는 점에서 차이가 있다.
// 인터넷 연결속도, 데이터의 유무 등에 따라 상태가 달라짐

//JSON Placeholder => 더미데이터 무료 제공 라이브러리
async function getData() {
  let rawReponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawReponse.json();
  console.log(jsonResponse);
}

getData();
