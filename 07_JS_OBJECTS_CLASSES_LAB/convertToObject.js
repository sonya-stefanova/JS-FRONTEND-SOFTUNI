function convertToObject(obj) {
    parsedToObject=JSON.parse(obj);

    Object.entries(parsedToObject).forEach(function(pair) {
        [key, value] = pair;
        console.log(`${key}: ${value}`)

})
}
const jsonObject='{"name": "George", "age": 40, "town": "Sofia"}';
convertToObject(jsonObject);
