
var playlist = {"Phil Ochs" : "My Bloody Valentine"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:"songTitle"})
}
