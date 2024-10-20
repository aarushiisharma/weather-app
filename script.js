const temp=document.getElementById('temp')
const description=document.getElementById('description')
const humid=document.getElementById('humid')
const wind=document.getElementById('wind')
const search=document.getElementById('button')
const input=document.getElementById('input')
const photo=document.getElementById('photo')


search.onclick=async function(){
    const ApiKey= "e1e575ad652d06e7c8e3f915ca4b34b1";
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${ApiKey}`;


    try {
        const response=await fetch(URL);
        const data= await response.json();
        temp.innerText=`${(data.main.temp-273.15).toFixed(2)} °C`;
        wind.innerText=`${data.wind.speed} Km/h Wind Speed`
        humid.innerText=`${data.main.humidity}% Humidity`
        description.innerText=`${data.weather[0].description}`


        if(description.innerText==="overcast clouds"  || description.innerText==="broken clouds"){
            photo.style.backgroundImage='url("cloud.png")';
        }
        else if(description.innerText==="clear sky"){
            photo.style.backgroundImage='url("clear.png")';
        }
        else if(description.innerText==="haze"){
            photo.style.backgroundImage='url("mist.png")';
        }
        else if(description.innerText==="light rain"   ||  description.innerText==="light intensity shower rain"){
            photo.style.backgroundImage='url("rain.png")';
        }
        else if(description.innerText==="snow"){
            photo.style.backgroundImage='url("snow.png")';
        }

    } catch (error) {
        console.error("Error fetching location",error);
    }
}
