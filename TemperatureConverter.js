let fahrenheit = document.getElementById('fahrenheit');
    let celsius = document.getElementById('celsius');
    let kelvin = document.getElementById('kelvin');

    fahrenheit.oninput = function () {
            let C = ((parseFloat(fahrenheit.value) - 32) /1.8);
            celsius.value = parseFloat(C.toFixed(2));
 
            let K = (parseFloat(fahrenheit.value) - 32) /1.8 + 273.15;
            kelvin.value = parseFloat(K.toFixed(2));
        }
    celsius.oninput = function () {
            let F = ((parseFloat(celsius.value)*1.8 + 32));
            fahrenheit.value = parseFloat(F.toFixed(2));
 
            let K = (parseFloat(celsius.value) + 273.15);
            kelvin.value = parseFloat(K.toFixed(2));
        }
    kelvin.oninput = function () {
            let F = ((parseFloat(kelvin.value) - 273.15)*1.8)+32;
            fahrenheit.value = parseFloat(F.toFixed(2));
 
            let C = (parseFloat(kelvin.value) - 273.15);
            celsius.value = parseFloat(C.toFixed(2));
        }