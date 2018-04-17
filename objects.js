var playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya"
};

const newPlaylist = playlist;

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},newPlaylist, {[artistName]: songTitle});
}