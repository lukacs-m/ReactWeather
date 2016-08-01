var axios = require('axios');
/// bb2b88d92528dd29add17cfbc3132c4f

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=bb2b88d92528dd29add17cfbc3132c4f&units=metric'

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then((res) => {

      if(res.data.cod && res.data.message){
        // console.log(res.data.message);
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (err) => {
      throw new Error(err.data.message);
    })
  }
}
