var playList = {Phil Ochs : "My Bloody Valentine"};

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]:"songTitle"})
}
