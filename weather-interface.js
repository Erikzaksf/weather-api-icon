$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let request = new XMLHttpRequest();
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6bae413a0dca3d1bf1c2de372588a226`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        let response = JSON.parse(this.responseText);
        getElements(response);
      }
    }

    request.open("GET", url, true);
    request.send();

    getElements = function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
      $('.showSpeed').text(`The wind speed is ${response.wind.speed}.`);
      // $('.showIcon').append(`<img src="http://openweathermap.org/img/w/${response.weather[0].icon}">`);
      $(".icon").html("<img src='http://openweathermap.org/img/w/" + response.weather[0].icon + ".png' alt='Icon depicting current weather.'>");
    }
  });
});
