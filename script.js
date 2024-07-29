document.getElementById('searchButton')
.addEventListener('click', 


function() 
{
    const city = document.getElementById('cityInput').value;
    const apiKey = '54bdb1fea57e4e15b8d173401241607'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    console.log('Fetching data for city:', city); // Debug log

    fetch(apiUrl)
        .then(response => {
            console.log('Response status:', response.status); // Debug log
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log('API response data:', data); // Debug log
            document.getElementById('cityName').textContent = data.location.name;
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c} °C`;
            document.getElementById('description').textContent = `Condition: ${data.current.condition.text}`;
            document.getElementById('humidity').textContent = `Humidity: ${data.current.humidity}%`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${data.current.wind_kph} kph`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weatherResult').textContent = 'City not found!';
        });
});
 