function towns(input) {
    const cities = input.reduce((acc, cityData) => {
        const [town, lat, long] = cityData.split(' | ');
        acc[town] = {
            'town': town,
            'latitude': Number(lat).toFixed(2),
            'longitude': Number(long).toFixed(2)
        };
        return acc;
    }, {});
    // console.log(cities);
    Object.values(cities).forEach((city) => {
        console.log(city);
    });
}

towns(
    ['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
towns(
    ['Plovdiv | 136.45 | 812.575']
    );

