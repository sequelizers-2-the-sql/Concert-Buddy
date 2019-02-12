import axios from "axios";

export default {
  concertArtist: function(artist) {
    return axios.get(`https://api.songkick.com/api/3.0/search/artists.json?apikey=5lteuiQE9y5NzSiJ&query=` + artist )
      .then((response) => {
          let artistId = +response.data.resultsPage.results.artist[0].id
          console.log(artistId);
          return axios.get(`https://api.songkick.com/api/3.0/artists/${artistId}/calendar.json?apikey=5lteuiQE9y5NzSiJ`)
    })
  },
  concertZip: function(zip) {
    return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=` + zip + `&key=AIzaSyAZuF8mTrMiYKcZ7z_Z8HnPrG201L2kpqY`)
      .then((response) => {
          let lat = +response.data.results[0].geometry.location.lat;
          let lng = +response.data.results[0].geometry.location.lng;
          return axios.get(`https://api.songkick.com/api/3.0/search/locations.json?location=geo:${lat},${lng}&apikey=5lteuiQE9y5NzSiJ`)
        })
      .then((response) => {
          let metroID = +response.data.resultsPage.results.location[0].metroArea.id;
          return axios.get(`https://api.songkick.com/api/3.0/metro_areas/${metroID}/calendar.json?apikey=5lteuiQE9y5NzSiJ`)
        });
  }
};
