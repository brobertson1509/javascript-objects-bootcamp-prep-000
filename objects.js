var playlist = {
  Slowdive: "Allison",
  MyBloodyValentine: "Sometimes"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
Object.assign({}, playlist, {PhilOchs: ["Here's to the State of Mississippi"]})
  return playlist;
}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.Slowdive;
  return playlist;
}
