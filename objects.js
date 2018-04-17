const playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya",
  "shreya": "barso re"
};

function updatePlaylist(playlist, artistName, songTitle){
  console.log(playlist);
  const newPlay = Object.assign( {} , playlist, {[artistName]:songTitle});
  console.log(newPlay.artistName);
  return newPlay;
}