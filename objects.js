var playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya"
};


function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist, {[artistName]: songTitle});
}