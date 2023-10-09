document.addEventListener("DOMContentLoaded", function () {
    // API Key OpenWeatherMap (gantilah dengan API key Anda sendiri)
    const apiKey = "b5b434ec55d40aa328bd7f074a1e5fa9";

    // Koordinat lokasi yang ingin Anda cek cuacanya
    const latitude = -7.250445;
    const longitude = 112.768845;

    // URL API OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    // Function untuk mengambil data cuaca dan memperbarui DOM
    function fetchWeatherData() {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                const city = data.name;
                const temperature = data.main.temp;
                const humidity = data.main.humidity;
                const windSpeed = data.wind.speed;

                // Update elemen HTML dengan data cuaca
                const temperatureElement = document.getElementById("temperature");
                const humidityElement = document.getElementById("humidity");
                const windSpeedElement = document.getElementById("windSpeed");
                const cityElement = document.getElementById("kota")

                if (temperatureElement && humidityElement && windSpeedElement && cityElement) {
                    temperatureElement.textContent = `Temperature: ${temperature}°C`;
                    humidityElement.textContent = `Humidity: ${humidity}%`;
                    windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
                    cityElement.textContent = `City Name: ${city}`;
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }

    // Panggil fungsi fetchWeatherData untuk memuat data cuaca saat halaman dimuat
    fetchWeatherData();
});
