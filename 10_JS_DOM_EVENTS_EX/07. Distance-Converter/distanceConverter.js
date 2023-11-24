function attachEventsListeners() {
    const [inputDistanceField, convertBttn, outputDistanceField] = document.querySelectorAll("input");
    const [readInputOption, readOutputOption] = document.querySelectorAll("select");
    const conversionRatesByMeter = {
        "km" : 1000,
        "m": 1,
        "cm": 0.01,
        "mm": 0.001,
        "ft": 0.3048,
        "mi": 1609.34,
        "yrd": 0.9144,
        "in": 0.0254        
    };
    
    convertBttn.addEventListener("click", () => {
        const readInput = readInputOption.value;
        const readOutput = readOutputOption.value;

        const inputDistance = inputDistanceField.value;
        const result = inputDistance * conversionRatesByMeter[readInput] / conversionRatesByMeter[readOutput];
        outputDistanceField.value = result;
    })
}