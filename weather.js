const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey="bdd7a8a699ec26d131f878fbff3c604e";
const search=document.querySelector(".tag-bar input");
const searchBtn=document.querySelector(".tag-bar button");
const bodyImage=document.querySelector('.body-img');
async function checkWeather(city){
    const request=await fetch(apiUrl+city+`&appid=${apiKey}`);
    var data=await request.json();
    console.log(data);
    document.getElementById('degree').innerHTML=Math.round(data.main.temp)+'°C';
    document.getElementById('city').innerHTML=data.name;
    document.getElementById('hum-value').innerHTML=data.main.humidity +"%"; 
    document.getElementById('wind-value').innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clear"){
        bodyImage.src="/WeatherApp/image/sun.png"
    }
    else if(data.weather[0].main=="Clouds"){
        bodyImage.src="/WeatherApp/image/cloudy.png"
    }
    else if(data.weather[0].main=="Mist"){
        bodyImage.src="/WeatherApp/image/fog.png"
    }
    else if(data.weather[0].main=="Drzille"){
        bodyImage.src="/WeatherApp/image/rainy-day.png"
    }
    else if(data.weather[0].main=="Rain"){
        bodyImage.src="/WeatherApp/image/heavy-rain.png"
    }
    else if(data.weather[0].main=="Haze"){
        bodyImage.src="/WeatherApp/image/haze.png"
    }
}
searchBtn.addEventListener("click",()=>{
    checkWeather(search.value);
   
})


