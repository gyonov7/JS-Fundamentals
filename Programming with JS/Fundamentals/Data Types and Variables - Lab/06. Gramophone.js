function gramophone(bandName, albumName, songName){
let songLength = (albumName.length*bandName.length) * songName.length/2;

let rotations = songLength/2.5;

console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
