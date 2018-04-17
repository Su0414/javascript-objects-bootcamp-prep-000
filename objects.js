var playlist = {
  //artistName : songTitle
  "arjitsingh":"ghar aaya"
};

const newPlaylist = playlist;

function updatePlaylist(playlist, artistName, songTitle){
  console.log("print boj=" +Object.assign({},newPlaylist, {[artistName]: songTitle}));
}