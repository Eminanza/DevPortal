var React = require('react');


var NavBar = React.createClass({
  render: function() {
    return (
      <nav className="container-fluid">
        <div className="navbar navbar-inverse">
          <a className="navbar-brand" href="#"><span className="brand">DevPortal</span> Stocks</a>
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Link</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
});

module.exports.NavBar = NavBar;