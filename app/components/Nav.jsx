var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = (props) => {
  return(
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">Slack Links</li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
        </ul>
      </div>
    </div>
  ) ;
};

module.exports = Nav;
