class Song{
    constructor(type, name, length) {
        this.type = type;
        this.name = name;
        this.length = length;
    
        
}
}

function songs(info) {
    const typeToDisplay = info.pop();
    const [_, ...songs] = info; //destructuring & mapping thee songs

    const result = songs
        .map(songsAsText => {
        const [type, name, length] = songsAsText.split("_")
        const song = new Song(type, name, length);

        return song;
        //returns array from songs!
        })
        .filter((song) => {
            if (typeToDisplay === 'all'){
                return song;
            }

        return song.type === typeToDisplay;
        })
        .map((song) => song.name)
        .join("\n");
        console.log(result);
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
