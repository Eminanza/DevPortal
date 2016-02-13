var React = require('react');
var NavBar = require('./navbar.js').NavBar;


var App = React.createClass({

  render: function() {
    return (
        <div>
          <NavBar />
        </div>
    );
  }
});

module.exports.App = App;