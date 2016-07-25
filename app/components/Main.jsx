var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <p>this is the main</p>
      {props.children}
    </div>
  );
};

module.exports = Main;
