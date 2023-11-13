function songs(info) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let countSongs = info.shift()
    let typeSong = info.pop()
    let songs = []

    for (let i = 0; i < countSongs; i++) {
        let [type, name, time] = info[i].split("_")
        songs.push(new Song(type, name, time))
    }

    if (typeSong === "all") {
        songs.forEach((x) => console.log(x.name))
    }

    else {
        let filterSongs = songs.filter((x) => x.typeList === typeSong)
        filterSongs.forEach((x) => console.log(x.name))
    }
}

inputData = 
[
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]
    
songs(inputData);

// Define a class Song, which holds the following information about songs:
// typeList, name, and time.
// You will receive the input as an array.
// The first element n will be the number of songs. 
//Next n elements will be the songs data in the following format: "{typeList}_{name}_{time}", 
// and the last element will be typeList / "all".
// Print only the names of the songs, which have the same typeList (obtained as the last parameter). 
// If the value of the last element is "all", print the names of all the songs.
