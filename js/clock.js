const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date(); //날짜 관련 함수
    const hours = String(date.getHours()).padStart(2,"0"); //불러온 시간을 문자로 변경후 padStar(문자변경길이, 원하는 문자) 함수로 1초를 01초로 변경
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `${hours}:${minutes}:${seconds}`; //시간 분 초를 불러온다.
}

getClock();
setInterval(getClock, 1000);//첫번째 인자: 실행하고자 하는 function 두번째 인자: 몇ms로 할지 즉 5초