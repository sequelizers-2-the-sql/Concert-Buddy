import axios from "axios";

export default {
geoLocate: function(add, ct, st) {
  let address = add.replace(/ /g,"+");
  let city = ct.replace(/ /g,"+");
  let state = st.toUpperCase();
  return axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},
    +${city},+${state}&key=AIzaSyAZuF8mTrMiYKcZ7z_Z8HnPrG201L2kpqY`)
  }
}