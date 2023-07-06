function convertTemperature() {
    var celsiusInput = document.getElementById('celsius');
    var fahrenheitInput = document.getElementById('fahrenheit');
    var resultElement = document.getElementById('result');
    var temperatureContainer = document.getElementById('temperature-container');

    if (celsiusInput.value !== '') {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = (celsius * 9 / 5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);

      // Change box color based on temperature
      if (celsius >= 40) {
        temperatureContainer.className = 'container hot';
      } else if (celsius >= 30) {
        temperatureContainer.className = 'container warm';
      } else if (celsius >= 20) {
        temperatureContainer.className = 'container moderate';
      } else if (celsius >= 10) {
        temperatureContainer.className = 'container cool';
      } else {
        temperatureContainer.className = 'container';
      }

      resultElement.innerHTML = '';
    } else if (fahrenheitInput.value !== '') {
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
      resultElement.innerHTML = '';
    } else {
      resultElement.innerHTML = 'Please enter a temperature value.';
    }
  }