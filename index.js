// create database songlist
use songList

// data artist
artist = [{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf18"
  },
  "name": "idgitaf",
  "dateOfBirth": {
    "$date": "2001-12-12T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf19"
  },
  "name": "James Arthur",
  "dateOfBirth": {
    "$date": "1990-10-12T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1a"
  },
  "name": "Benson Boone",
  "dateOfBirth": {
    "$date": "1997-08-11T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1b"
  },
  "name": "Benson Boone",
  "dateOfBirth": {
    "$date": "1997-08-11T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1c"
  },
  "name": "Raim Laode",
  "dateOfBirth": {
    "$date": "1994-09-24T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1d"
  },
  "name": "Budi Doremi",
  "dateOfBirth": {
    "$date": "1992-03-24T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1e"
  },
  "name": "Tiara Andini",
  "dateOfBirth": {
    "$date": "1995-05-13T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf1f"
  },
  "name": "Feby Putri",
  "dateOfBirth": {
    "$date": "1999-02-17T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf20"
  },
  "name": "Feby Putri",
  "dateOfBirth": {
    "$date": "1999-02-17T00:00:00.000Z"
  },
  "genre": "Pop"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf21"
  },
  "name": "Ismail",
  "dateOfBirth": {
    "$date": "1993-04-11T00:00:00.000Z"
  },
  "genre": "Rock"
},
{
  "_id": {
    "$oid": "64b55ecdd0323b25c92fdf22"
  },
  "name": "Iis Dahlia",
  "dateOfBirth": {
    "$date": "1983-07-14T00:00:00.000Z"
  },
  "genre": "Dangdut"
}]

// create collection artist and insert artist
db.artists.insertMany(artist)
// show artist
db.artists.find()

// Data popular song
popSong = [{
  "_id": {
    "$oid": "64b5607b38de9d47f7b86756"
  },
  "title": "Akhir Tak Bahagia",
  "timesPlayed": "300",
  "periodTime": "03.40"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b86757"
  },
  "title": "Angel's Like You",
  "timesPlayed": "234",
  "periodTime": "04.10"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b86758"
  },
  "title": "Car's Outsite",
  "timesPlayed": "453",
  "periodTime": "03.43"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b86759"
  },
  "title": "Yellow",
  "timesPlayed": "123",
  "periodTime": "03.56"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675a"
  },
  "title": "Here With Me",
  "timesPlayed": "126",
  "periodTime": "03.23"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675b"
  },
  "title": "Takut",
  "timesPlayed": "278",
  "periodTime": "04.19"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675c"
  },
  "title": "L",
  "timesPlayed": "321",
  "periodTime": "04.01"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675d"
  },
  "title": "Kangen",
  "timesPlayed": "467",
  "periodTime": "03.12"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675e"
  },
  "title": "Badut",
  "timesPlayed": "768",
  "periodTime": "02.58"
},
{
  "_id": {
    "$oid": "64b5607b38de9d47f7b8675f"
  },
  "title": "Pluto Projector",
  "timesPlayed": "912",
  "periodTime": "03.12"
}]
// create collection popularSongs and insert popularSongs
db.popularSongs.insertMany(popSong)
// show popularSongs
db.popularSongs.find()


// Data Song

songs = [{
  "_id": {
    "$oid": "64b5512e0e34ba00b208fd6f"
  },
  "title": "Takut",
  "artist": "Idgitaf",
  "album": "Popular Indo"
},
{
  "_id": {
    "$oid": "64b5517d0e34ba00b208fd75"
  },
  "title": "Kepada Noor",
  "artist": "Panji Sakti",
  "album": "Popular Indo"
},
{
  "_id": {
    "$oid": "64b551a80e34ba00b208fd79"
  },
  "title": "Akhir Tak Bahagia",
  "artist": "Misellia",
  "album": "Populer Indo"
},
{
  "_id": {
    "$oid": "64b552c30e34ba00b208fd7b"
  },
  "title": "Jiwa Yang Bersedih",
  "artist": "Ghea Indrawari",
  "album": "Popular Indo"
},
{
  "_id": {
    "$oid": "64b552c30e34ba00b208fd7c"
  },
  "title": "A Thousand Years",
  "artist": "James Arthur",
  "album": "Popular Barat"
},
{
  "_id": {
    "$oid": "64b552c30e34ba00b208fd7d"
  },
  "title": "Loneliness",
  "artist": "Putri Ariani",
  "album": "Popular Indo"
},
{
  "_id": {
    "$oid": "64b552c30e34ba00b208fd7e"
  },
  "title": "Komang",
  "artist": "Raim Laode",
  "album": "Popular Indo"
},
{
  "_id": {
    "$oid": "64b5538a0e34ba00b208fd80"
  },
  "title": "Yellow",
  "artist": "Coldplay",
  "album": "Popular Barat"
},
{
  "_id": {
    "$oid": "64b5538a0e34ba00b208fd81"
  },
  "title": "In The Stars",
  "artist": "Benson Boone",
  "album": "Popular Barat"
},
{
  "_id": {
    "$oid": "64b5538a0e34ba00b208fd82"
  },
  "title": "Angels Like You",
  "artist": "Miley Cyrus",
  "album": "Popular Barat"
}]
// create collection listSongs and insert listSongs
db.listSongs.insertMany(Song)
// show listSongs
db.listSongs.find()
