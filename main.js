const button = document.getElementById('btn');
button.addEventListener('click', fun1)
const daneCity = document.getElementById('city');
const daneTemp = document.getElementById('temp');
const cityInput = document.getElementById('cityInput');
const imgWeather = document.getElementById('imgIcon');
const apiKey = '';
const ALERT = document.getElementsByClassName('alert')[0];
cityInput.addEventListener('keypress', (event) => {
    if(event.which == 13) {
        fun1();
    }
});

function fun1() {
    let cityText = cityInput.value;
    if( cityText == '') {
        ALERT.classList.remove('d-none');
    }
    else {
    ALERT.classList.add('d-none');
    let api = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityText}&appid=${apiKey}&units=metric`);
    api
        .then(res => res.json())
        .then(res => {
            let dane = res
            console.log(dane);
            daneCity.innerHTML = dane.name;
            daneTemp.innerHTML = dane.main.temp;
            let nameIcon = dane.weather[0].icon;
            let link = `http://openweathermap.org/img/wn/${nameIcon}@2x.png`;
            imgWeather.src =  link;
        })
    }
}




