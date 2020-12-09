var playlist = {
  artistName: "songTitle",
  artistName1: "songTitle1"
};

playlist.artistName;

function updatePlaylist (object, key, value) {
  object.assign({}, playlist, {ArtistName2: "SongTitle2"})
  playlist;
}
