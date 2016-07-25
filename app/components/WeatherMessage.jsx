var React = require('react');


// var WeatherMessage = (props) => {
//      var {temp, location} = props;
//
//   return (
//     <h2>This is {temp} in {location}</h2>
//   );
// };


var WeatherMessage = ({temp, location}) => {

  return (
    <h2>It is {temp} in {location}</h2>
  );
};

module.exports = WeatherMessage;
