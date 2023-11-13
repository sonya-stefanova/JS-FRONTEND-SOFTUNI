function convertToJSON(firstName, lastName, hairColor) {
    let personDetails = {};
    personDetails['firstName'] = firstName;
    personDetails['lastName'] = lastName;
    personDetails['hairColor'] = hairColor;

    console.log(JSON.stringify(personDetails))
}

convertToJSON('Sonya', 'Haralambieva', 'brown')