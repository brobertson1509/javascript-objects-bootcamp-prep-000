var playlist = {
  Slowdive: "Allison",
  MyBloodyValentine: "Sometimes"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
Object.assign({}, playlist, {PhilOchs: ""})
  return playlist;
}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.Slowdive;
  return playlist;
}
