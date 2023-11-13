function personInfo(firstName, lastName, age) {
    // let person = {};
    // person.firstName = firstName;
    // person.lastName = lastName;
    // person.age = age;

    // return person

    //syntaxis sugar
    return {
        firstName, 
        lastName,
        age
    }
}
console.log(
personInfo(
    "Peter", 
    "Pan",
    "20")
)