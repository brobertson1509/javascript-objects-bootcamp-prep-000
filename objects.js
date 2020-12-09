var playlist = {
  artistName1: "songTitle1"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
  playlist.'Slowdive' = 'Alison'
  playlist.'My Bloody Valentine' = 'Sometimes'
  object.assign({}, playlist, {ArtistName: "SongTitle"})
  return playlist;
}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.ArtistName;
  return playlist;
}
