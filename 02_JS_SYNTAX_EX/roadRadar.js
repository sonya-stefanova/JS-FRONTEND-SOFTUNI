function roadRadar(speed, type){
    let speedLimit;
    let status=''

    if (type=='motorway'){
        speedLimit=130;
    } else if(type=='interstate'){
        speedLimit=90;
    } else if(type=='city'){
        speedLimit=50;
    } else if(type='residential'){
        speedLimit=20;
    }

    if (speed<=speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        difference=Math.abs(speedLimit-speed)
        if (difference>40){
            status='reckless driving';

        }else if (difference>20){
            status='excessive speeding';

        } else {
            status = 'speeding';
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }


}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');