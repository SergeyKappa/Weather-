
let cityS = prompt("Введите название города?");
// let url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityS}&units=metric&APPID=5d066958a60d315387d9492393935c19';


fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityS}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((res) => res.json())
.then((data) => {
   
    console.log(data);
 })

 
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityS}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
.then((res) => res.json())
  .then((data) => {

    document.querySelector('.city').textContent = data.name
    document.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/w/${data.weather[0]['icon']}.png
       ">`;
    
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)
    
    document.querySelector('.humidity').innerHTML = data.main.humidity
    document.querySelector('.wind').innerHTML = data.wind.speed
   
       
 })
 