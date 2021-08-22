const btn = document.getElementById("convert");           //variabel convert button
const degree = document.getElementById("suhu");           // variabel nilai suhu
const temperature = document.getElementById("awal");      // variabel jenis suhu dari "awal"
const convertTo = document.getElementById("akhir");       // variabel jenis suhu dari "akhir"
let result = document.getElementById("Hasil");            // variabel daripada hasil
let formula = document.getElementById("formula");         // variabel daripada hasil

degree.onclick = (event) => {
    degree.placeholder = "";
    degree.style.border = "2px solid gray";
};

btn.onclick = (event) => {
    event.preventDefault();
    if (degree.value === "") {
        setError(degree);
    } else {
        if (temperature.value === "Fahrenheit") {
            if (convertTo.value === "Celcius") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 5/9 = " +
                    Math.floor(fahrenheitToCelsius(degree.value)) +
                    "°C";
            } else if (convertTo.value === "Kelvin") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 5/9 + 273.15 = " +
                    fahrenheitToKelvin(degree.value).toFixed(2) +
                    "K";
            } else if (convertTo.value === "Reamur") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°F − 32) × 4/9 = " +
                    Math.floor(fahrenheitToReamur(degree.value)) +
                    "°Ré";
            } else {
                selectOption(convertTo, "Celcius");
                btn.click();
            }
        } else if (temperature.value === "Celcius") {
            if (convertTo.value === "Fahrenheit") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C × 9/5) + 32 = " +
                    Math.floor(celsiusToFahrenheit(degree.value)) +
                    "°F";
            } else if (convertTo.value === "Kelvin") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C + 273.15) = " +
                    celsiusToKelvin(degree.value).toFixed(2) +
                    "K";
            } else if (convertTo.value === "Reamur") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°C x 4/5) = " +
                    Math.round(celsiusToReamur(degree.value)) +
                    "°R";
            } else {
                selectOption(convertTo, "Fahrenheit");
                btn.click();
            }
        } else if (temperature.value === "Kelvin") {
            if (convertTo.value === "Fahrenheit") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) × 9/5 + 32 = " +
                    kelvinToFahrenheit(degree.value).toFixed(2) +
                    "°F";
            } else if (convertTo.value === "Celcius") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) = " +
                    kelvinToCelsius(degree.value).toFixed(2) +
                    "°C";
            } else if (convertTo.value === "Reamur") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "K − 273.15) × 4/5 = " +
                    kelvinToReamur(degree.value).toFixed(2) +
                    "°R";
            } else {
                selectOption(convertTo, "Fahrenheit");
                btn.click();
            }
        } else {
            if (convertTo.value === "Fahrenheit") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré * (9/4) + 32  = " +
                    Math.round(reamurToFahrenheit(degree.value)) +
                    "°F";
            } else if (convertTo.value === "Celcius") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré × 5/4) = " +
                    Math.round(reamurToCelsius(degree.value)) +
                    "°C";
            } else if (convertTo.value === "Kelvin") {
                result.innerText = result.textContent =
                    "(" +
                    degree.value +
                    "°Ré * (5/4) + 273.15  = " +
                    reamurToKelvin(degree.value).toFixed(2) +
                    "K";
            } else {
                selectOption(convertTo, "Celcius");
                btn.click();
            }
        }
    }
};

//sets error on input for degrees
function setError(err) {
    err.style.border = "2px solid #ff0000";
    err.placeholder = "Input Number";
}

function selectOption(convert, newValue) {
    let opts = convert.options;
    for (let opt, j = 0; (opt = opts[j]); j++) {
        if (opt.value == newValue) {
            convert.selectedIndex = j;
            break;
        }
    }
}

// Konversi Fahreirhet ke Kelvin, Celsius, dan Reamur
function fahrenheitToKelvin(f) {
    return ((parseInt(f) - 32) * 5) / 9 + 273.15;
}
function fahrenheitToCelsius(f) {
    return ((parseInt(f) - 32) * 5) / 9;
}
function fahrenheitToReamur(f) {
    return ((parseInt(f) - 32) * 4) / 9;
}

// Konversi Celsius ke Fahreinhet, Kelvin, dan Reamur
function celsiusToFahrenheit(c) {
    return (parseInt(c) * 9) / 5 + 32;
}
function celsiusToKelvin(c) {
    return parseInt(c) + 273.15;
}
function celsiusToReamur(c) {
    return (parseInt(c) * 4) / 5;
}

// Konversi Kelvin ke Fahreinhet, Celsius, dan Reamur
function kelvinToFahrenheit(k) {
    return ((parseInt(k) - 273.15) * 9) / 5 + 32;
}
function kelvinToCelsius(k) {
    return parseInt(k) - 273.15;
}
function kelvinToReamur(k) {
    return ((parseInt(k) - 273.15) * 4) / 5;
}

// Konversi Reamur ke Fahreinhet, Celsius, dan Kelvin
function reamurToFahrenheit(r) {
    return parseInt(r) * (9 / 4) + 32;
}
function reamurToCelsius(r) {
    return parseInt(r) * (5 / 4);
}
function reamurToKelvin(r) {
    return parseInt(r) * (5 / 4) + 273.15;
}
