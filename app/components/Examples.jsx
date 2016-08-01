var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h2 className="text-center">Examples</h2>
      <p>Here are a few exmaples to try out</p>
      <ol>
        <li>
          <Link to='/?location=Paris'>Paris, France</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
