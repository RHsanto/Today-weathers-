document.getElementById('error-message').style.display = 'none'

const loadResult = () =>{

const searchField = document.getElementById('search-result')
const searchText = searchField.value;
searchField.value = '';
document.getElementById('error-message').style.display = 'none'


const url =(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}%20&appid=c378c77461b7f5864c75a5edbe2b7fac`)
fetch(url)
.then(res => res.json())
.then(data => displayWeather(data))
.catch(error => displayError(error))
}

const  displayError = error => {
  document.getElementById('error-message').style.display = 'block'

}


const displayWeather = data =>{

  const weatherDisplay = document.getElementById('display-weather');
  weatherDisplay.textContent='';
  const h2 = document.createElement('div')
    h2.innerHTML = `
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
    
     <h2>  ${data.name} , ${data.sys.country}  </h2>
   <h3>  ${((data.main.temp)-273.15).toFixed(0)}°C | ${(((data.main.temp)-273.15)*(9/5) + 32).toFixed(0)}°F  </h3>
   <h3>     </h3>
     <h5> ${data.weather[0].main} </h5>
     
    `
    weatherDisplay.appendChild(h2)
  
  
  } 
  