let searchbutton = document.querySelector(".searchicon");
let detailsimage = document.querySelector(".detailsimage");
let details = document.querySelector(".details");
let details2 = document.querySelector(".details2");
let main= document.querySelector(".main")
let searchinput = document.querySelector(".search");
let weather;
let weatherdata;
let data;
let degree= document.querySelector(".degree")
let cityname= document.querySelector(".cityname")
let humidity= document.querySelector(".p1")
let windspeed= document.querySelector(".insideright .p1")
let id;
let icon;
let originalplaceholder;


let checkweather= (weather,icon,id)=>{
    weather = weather.toLowerCase();
    console.log("weather in checkweather function == ",weather);
    console.log("icon of the weather is == ",icon);
    console.log("id of the weather is == ",id);
    // console.log(icon=="04n");
    if(id>=701 && id<=781){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id>=200 && id<=232){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id>=300 && id<=321){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id>=500 && id<=531){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id>=600 && id<=622){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id>=801 && id<=804){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    if(id==800){
    detailsimage.src=`https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    

    degree.innerHTML=data.main.temp;
    cityname.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity;
    windspeed.innerHTML=data.wind.speed;
    // // console.log(weather == "smoke");
    // if (weather == "clear") {
    //     detailsimage.src = "/weather-app-img/images/clear.png";
    // }
    // else if (weather == "clouds") {
    //     detailsimage.src = "/weather-app-img/images/clouds.png";
    // }
    // else if (weather == "drizzle") {
    //     detailsimage.src = "/weather-app-img/images/drizzle.png";
    // }
    // else if (weather == "humidity") {
    //     detailsimage.src = "/weather-app-img/images/humidity.png";
    // }
    // else if (weather == "smoke") {
    //     detailsimage.src = "/weather-app-img/images/mist.png";
    //     console.log("Done")
    // }
    // else if (weather == "rain") {
    //     detailsimage.src = "/weather-app-img/images/rain.png";
    // }
    // else if (weather == "snow") {
    //     detailsimage.src = "/weather-app-img/images/snow.png";
    // }
    // else if (weather == "wind") {
    //     detailsimage.src = "/weather-app-img/images/wind.png";
    // }
}
let showdisplay = ()=>{
    main.style.height="550px"
    details.classList.remove("hide")
    details2.classList.remove("hide")

}


searchbutton.addEventListener("click", async () => {
    let inputvalue = searchinput.value;
    if (inputvalue != "") {
        weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue}&appid=16c651ed294d4efd8d31caf122015337&units=metric`)
        console.log(inputvalue);
        data = await weatherdata.json();
        console.log(data);
        weather = data.weather[0].main
         console.log(weather);
         icon=data.weather[0].icon
         id=data.weather[0].id
     checkweather(weather,icon,id,cityname);
        showdisplay();
        
    }
})

originalplaceholder=searchinput.placeholder;
searchinput.addEventListener("focus",()=>{
    searchinput.placeholder="";
})
searchinput.addEventListener("blur",()=>{
        searchinput.placeholder=originalplaceholder;
})

// function initAutocomplete() {
//     var input = document.getElementsByClassName('searchinput');
//     var autocomplete = new google.maps.places.Autocomplete(input);
// }
// function initAutocomplete() {
//     var autocomplete = new google.maps.places.Autocomplete(
//         document.getElementsByClassName('search'),
//         { types: ['geocode'] }
//     );

//     autocomplete.addListener('place_changed', function() {
//         var place = autocomplete.getPlace();
//         console.log('Selected place:', place);
//     });
// }

// $(document).ready(function(){
//     var autocomplete;
//     var id = 'location';
//     autocomplete = new google.maps.places.Autocomplete((document.getElementById(id)),{
//         types:['geocode'],
//     })
// })
