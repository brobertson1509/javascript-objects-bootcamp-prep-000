var playlist = {
  Slowdive: "Allison",
  MyBloodyValentine: "Sometimes"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
  playlist.Slowdive = 'Alison';
  playlist.MyBloodyValentine = 'Sometimes';
  return playlist;
}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.Slowdive;
  return playlist;
}
