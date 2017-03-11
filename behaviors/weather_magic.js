var http = require('http');

function getCurrentWeather(convo) {
  var keyword = "weather in";
  // sanitize the input
  var search_string = convo.source_message.text.toLowerCase();
  // select all the text after the keyword
  var city_name = search_string.slice(search_string.indexOf(keyword) + keyword.length).trim();

  // reach out to 3rd party api, Open Weather
  return http.get({
    host: 'api.openweathermap.org',
    path: `/data/2.5/weather?q=${encodeURI(city_name)}&appid=${process.env.WEATHER_API}`
  }, function(response) {
    var body = '';
    // collect the response
    response.on('data', function(d) { body += d; });
    response.on('end', function() {
      // parse the response
      var parsed = JSON.parse(body);
      // prepare the msg response
      var msg = `The weather in ${parsed.name} is ${parsed.weather[0].description}`;
      console.log(msg)
      // speak
      convo.say(msg);
    });
  });
}

module.exports = {
  getCurrentWeather
};
