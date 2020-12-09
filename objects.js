var playlist = {
  artistName1: "songTitle1"
};

playlist.artistName;

function updatePlaylist (playlist, ArtistName, songTitle) {
  object.assign({}, playlist, {ArtistName: "SongTitle"})
  return playlist;
}

function removeFromPlaylist (playlist, ArtistName) {
  delete playlist.ArtistName;
  return playlist;
}