function towns(input){
    const cities = input
    .map((cityData)=> {
        const [town, lat, long] = cityData.split(' | ');
        return {
            'town':town, 
            'latitude': Number(lat).toFixed(2), 
            'longitude':Number(long).toFixed(2)
        };
    })
    // console.log(cities);
    .forEach((city)=>{
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

