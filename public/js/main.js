const cityName = document.querySelector("#cityName");
const submitBtn = document.querySelector("#submitBtn");
const city_name = document.querySelector("#city_name");
const temp = document.querySelector("#temp_real");
const temp_status = document.querySelector("#temp_status");
const dataHide = document.querySelector(".middle_layer");
const day = document.querySelector("#day");
const today_date = document.querySelector("#today_date");

submitBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if (cityVal === "") {
        city_name.innerHTML = "Write the city name before search";
        dataHide.classList.add("data_hide");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=99fbb68a714163ea74cdb650fa671af6`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const arr = [data];

            city_name.innerText = `${arr[0].name}, ${arr[0].sys.country}`;
            temp.innerText = arr[0].main.temp;

            const tempMood = arr[0].weather[0].main;

            // Conditions to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`;
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>`;
            } else if (tempMood == "Haze") {
                temp_status.innerHTML = `<i class="fas fa-smog" style="color: #f1f2f6;"></i>`;
            } else {
                temp_status.innerHTML = `<i class="fas fa-sun" style="color: #eccc68;"></i>`;
            }
        dataHide.classList.remove('data_hide');

        } catch {
            city_name.innerText = "Write the city name properly";
            dataHide.classList.add("data_hide");
        }
    }
});


const getCurrentDay = () => {
    let weekDay = new Array(7);
    let currentTime = new Date();
    weekDay[0] = "Sunday";
    weekDay[1] = "Monday";
    weekDay[2] = "Tuesday";
    weekDay[3] = "Wednesday";
    weekDay[4] = "Thursday";
    weekDay[5] = "Friday";
    weekDay[6] = "Saturday";

    let day1 = weekDay[currentTime.getDay()];
    day.innerHTML = day1;
    today_date.innerHTML = `${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()}`;
}

getCurrentDay();