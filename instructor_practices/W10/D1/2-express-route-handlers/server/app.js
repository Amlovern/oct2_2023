// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.get('/artists', (req, res) => {
  const data = getAllArtists();
  res.json(data)
})

app.post('/artists', (req, res) => {
  const body = req.body;
  res.status(201).json(addArtist(body));
})

// DO NOT MODIFY
if (require.main === module) {
  const port = 5000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}