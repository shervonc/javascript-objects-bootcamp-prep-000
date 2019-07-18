var playlist = {Phil Ochs: "Don't Give Up"}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, {[artistName]:"songTitle"})
}
