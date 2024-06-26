let weather = {
  apiKey: "3d569778856f048ad43f0f1ed4438dc5",
  fetchWeather: function (city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&appid=" 
    + this.apiKey
    )
    .then((response) =>response.json())
    .then((data) => this.displayWeather(data))
  },
  displayWeather: function (data){
  const  {name} = data;
  const {icon,description}= data.weather[0];
  const {temp,humidity}= data.main;
  const {speed} = data.wind;
  console.log(name,icon,description,temp,humidity,speed);
  document.querySelector(".city").innerHTML = "Weather in "+ name;
  document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon+ ".png"
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".temp").innerHTML = temp.toFixed(2) + "°F";
  document.querySelector(".humidity").innerHTML = "Humidity: "+humidity+"%";
  document.querySelector('.wind').innerHTML = "Wind Speed: "+ speed+"Km/h";
  // document.querySelector(".weather").classList.remove("loading");
},
  search: function(){
    this.fetchWeather(document.querySelector('.search-bar').value)
  }
}

document.querySelector('.search-button').addEventListener('click',()=>{
 weather.search();
})

document.querySelector(".search-bar").addEventListener('keyup',function(){
  if(event.key === 'Enter'){
    weather.search();
  }
})

weather.fetchWeather("Osogbo");
// weather.fetchWeather();