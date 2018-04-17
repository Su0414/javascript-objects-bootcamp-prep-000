var playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya",
  "shreya": "barso re"
};

function updatePlaylist(playlist, artistName, songTitle){
  console.log(playlist);
  console.log(artistName);
  console.log(songTitle);

  return Object.assign( {} , playlist, {[artistName]:songTitle});
}