var playlist = {
  Slowdive: "Allison",
  MyBloodyValentine: "Sometimes"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
return Object.assign({}, playlist, {PhilOchs: ["Here's to the State of Mississippi"]})

}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.Slowdive;
  return playlist;
}
