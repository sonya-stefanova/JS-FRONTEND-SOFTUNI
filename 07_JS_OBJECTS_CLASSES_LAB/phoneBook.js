function phoneBook(array) {
    let phoneBookDetails = {};

    for (const personInfo of array) {
        [userName, phone] = personInfo.split(' ');
        phoneBookDetails[userName] = phone;
    }
 
    for (const[name, phoneNumber] of Object.entries(phoneBookDetails)) {
        console.log(`${name} -> ${phoneNumber}`);
    }
}
const array= [
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
]

phoneBook(array);

// Tim -> 0876566344
// Peter -> 0877547887
// Bill -> 0896543112
