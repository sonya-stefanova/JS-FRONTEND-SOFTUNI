function getInfo() {
    const busStopID = document.querySelector('#stopId').value;
    const ulElement = document.querySelector('ul');
    const stopName = document.querySelector('#stopName');

    ulElement.innerHTML = "";

    const apiManager = {
        busStopURL: (ID) => `http://localhost:3030/jsonstore/bus/businfo/${ID}`
    }

    fetch(apiManager.busStopURL(busStopID))
        .then(res => res.json())
        // .then(console.log);
        .then((busStop) =>{
            stopName.textContent = busStop.name;


            Object.entries(busStop.buses).map(([busNumber, timeInMins])=>{
                const listItem = document.createElement('li');
                listItem.textContent = `Bus ${busNumber} arrives in ${timeInMins} minutes`

                // document.querySelector('ul').appendChild(listItem); 

                ulElement.appendChild(listItem);
            })

        })

        .catch(() => {
            stopName.textContent = "Error";
        });

    };
// async function getInfo() {
//     const busStopID = document.querySelector('#stopId').value;
//     const ulElement = document.querySelector('ul');
//     const stopName = document.querySelector('#stopName');

//     ulElement.innerHTML = "";

//     const apiManager = {
//         busStopURL: (ID) => `http://localhost:3030/jsonstore/bus/businfo/${ID}`
//     }

//     try{
//         const response = await fetch(apiManager.busStopURL(busStopID));
//         const busStopInfo = await response.json();            

//     } catch(_) {
//         stopName.textContent = "Error";
//         return;
//     };

//     stopName.textContent = busStopInfo.name;

//     Object.entries(busStopInfo.buses).map(([busNumber, timeInMins])=>{
//         const listItem = document.createElement('li');
//         listItem.textContent = `Bus ${busNumber} arrives in ${timeInMins} minutes`

//         // document.querySelector('ul').appendChild(listItem); 

//         ulElement.appendChild(listItem);
//     });

    
// };






