//  API key= 6127f47d3df7bdb2723633cfacca1b40
 //  https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=6127f47d3df7bdb2723633cfacca1b40
 //https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=6127f47d3df7bdb2723633cfacca1b40
 async function weather(){
    let city=document.querySelector('#search>input').value;
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=6127f47d3df7bdb2723633cfacca1b40";
    const res=await fetch(url);
    if(res.status==404){
        let city=document.querySelector('#search>input');
       city.value="Invalid City:Try again!";
       city.style.color="red";
       setTimeout(()=>{
       city.value="";
       city.style.color="";
       },2000)
    }else{
    const data=await res.json();
    temp.innerHTML=Math.round(data.main.temp)+"℃";
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"km/h";
    console.log(data.weather[0].main);
    if(data.weather[0].main=="Mist"){
        document.querySelector('#main>img').src="img/images/mist.png";
    }else if(data.weather[0].main=="Rain"){
        document.querySelector('#main>img').src="img/images/rain.png";
    }
    else if(data.weather[0].main=="Clouds"){
        document.querySelector('#main>img').src="img/images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        document.querySelector('#main>img').src="img/images/clear.png";
    }else if(data.weather[0].main=="Drizzle"){
        document.querySelector("#main>img").src="img/images/drizzle.png";
    }else if(data.weather[0].main=="Haze"){
        document.querySelector("#main>img").src="img/images/haze.png";
    }else if(data.weather[0].main=="Snow"){
        document.querySelector("#main>img").src="img/images/snow.png";
    }
    
 }
}
