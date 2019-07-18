var playlist = {Damian: "Don't Give Up"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]:"songTitle"})
}
