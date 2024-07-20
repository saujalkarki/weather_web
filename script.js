const weatherCity = document.querySelector(".weatherCity");
const searchBtn = document.querySelector(".search-btn");
const tempH1 = document.querySelector(".tempH1");
const humidH1 = document.querySelector(".humidH1");
const latitudeH1 = document.querySelector(".latitudeH1");
const longitudeH1 = document.querySelector(".longitudeH1");
const City = document.querySelector(".City");

function renderData(city) {
  async function fetchingFunc() {
    try {
      const data = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=93Y5PBPC3H2UWBWWP433VGUZ8`
      );
      const data1 = await data.json();

      City.textContent = city;
      tempH1.textContent = Math.round(
        (data1.currentConditions.temp - 32) * (5 / 9)
      );
      humidH1.textContent = data1.currentConditions.humidity;
      latitudeH1.textContent = data1.latitude;
      longitudeH1.textContent = data1.longitude;
    } catch (err) {
      alert("Something went wrong.");
    }
  }

  fetchingFunc();
}

renderData("Itahari");

searchBtn.addEventListener("click", function () {
  renderData(weatherCity.value);
});
