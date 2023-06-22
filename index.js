// fetch("https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&appid=fe8a80d29ba15d35bc63fc08de6a86be&units=metric")
// .then(response => response.json())
// .then((response) => {
//     console.log(response)
//     getData(response)
// })
// .catch((error) => {
//     console.log(error)
// })

// function getData(data){
//     console.log(data.name)

// }
// const searchEle = document.getElementById('search')
// const searchBtn = document.getElementById('searchBtn')
// const city = searchEle.value


// searchBtn.addEventListener("click",checkWheater)

// function checkWheater(city){
    

// } 

const searchEle = document.getElementById('search')
const searchBtn = document.getElementById('searchBtn')


async function checkWheater(city){
        try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&appid=fe8a80d29ba15d35bc63fc08de6a86be&units=metric&q=${city}`)
        const data = await response.json()
            console.log(data)
            console.log(city)

        document.getElementById('temp').innerHTML  = Math.round(data.main.temp)+ `<sup>o </sup>` ;
        document.getElementById('city').innerHTML  = city ;
        document.getElementById('humiPer').innerHTML = data.main.humidity + "%" ;
        document.getElementById('windSpeed').innerHTML = data.wind.speed + "km/h"
        searchEle.value = ""
        }
        catch(eroor){
            console.log(eroor)
        }

}

searchBtn.addEventListener("click",()=>{
    checkWheater(searchEle.value)
})
