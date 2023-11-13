function meetings(array){
    const scheduleObj= {}

    for (const item  of array){
        [day, userName] = item.split(' ');
        if (!scheduleObj[day]) {
            scheduleObj[day] = userName;
            console.log(`Scheduled for ${day}`)
        }else{
            console.log(`Conflict on ${day}!`)
            continue;
        };
    }
    Object.entries(scheduleObj).forEach(function(pair) {
        [key, value] = pair;
        console.log(`${key} -> ${value}`);
    });
}

arr = [
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]

console.log(meetings(arr));
