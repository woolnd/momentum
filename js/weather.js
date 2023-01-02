const API_KEY = "097176059f7a6fe3934a296004c7abcf";

function onGeoOk(position){
    const lat = position.coords.latitude; //위도를 얻어온다.
    const lon = position.coords.longitude; //경도를 얻어온다
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = `\n${data.name}`;
            weather.innerText = `${data.weather[0].main} ${data.main.temp}ºC`;
        });
    //fetch 하고 나서 reponse를 받아야한다 json()는 날씨에 모든 정보이고 이후에 데이터의 이름(주소)와 날씨 배열의 첫번째 main을 가져와 출력
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //현재의 위치를 불러오는데 첫번째 인자는 잘되었을때의 실행될 함수 두번째는 에러가 발생 시 실행되는 함수이다.
