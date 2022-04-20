function songs(inputArray) {
  class Song {
    constructor(typeList, name, time) {
      (this.typeList = typeList), (this.name = name), (this.time = time);
    }
  }
  let currentSong = [];
  let numberOfSongs = inputArray.shift();
  let typeOfSong = inputArray.pop();
  for (let tokens of inputArray) {
    let [typeList, name, time] = tokens.split("_");
    let song = new Song(typeList, name, time);
    currentSong.push(song);
  }

  if (typeOfSong === "all") {
    currentSong.forEach((i) => console.log(i.name));
  } else {
    let filtered = currentSong.filter((i) => i.typeList === typeOfSong);
    filtered.forEach((i) => console.log(i.name));
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
