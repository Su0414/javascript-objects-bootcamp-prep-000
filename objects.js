var playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya"
};


function updatePlaylist(playlist, artistName, songTitle){
  const newPlaylist = playlist;
  return Object.assign({},newPlaylist, {[artistName]: songTitle});
}