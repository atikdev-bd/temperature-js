const API_KYE = `392748139e74ba7935f6d1b0cd2205be`;

const temperatureApi = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KYE}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const displayTemperature = (data) => {
  console.log(data);
  const display = document.getElementById("temperature");
  document.getElementById("city").innerText = data.name;
  document.getElementById('condition').innerText = data.weather[0].main
  display.innerText = data.main.temp;
};

document.getElementById("search-btn").addEventListener("click", function () {
  const search = document.getElementById("input-value");
  const searchText = search.value;
  temperatureApi(searchText);
  search.value = ''
});
