function addressBook(infoArray) {
    let addressObjData = {};

    for (let data of infoArray) {
        let [name, address] = data.split(":");
        addressObjData[name] = address;
    }

    for (let [name, address] of Object.entries(addressObjData).sort()) {
        console.log(`${name} -> ${address}`)
    }
}

const infoArray = [
    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]

console.log(addressBook(infoArray))

// Bill -> Ornery Rd --> sorted alphabetically!!!
// Peter -> Carlyle Ave
// Tim -> Doe Crossing
