var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <a href="#">(c) 2016 Dev Portal</a>
            </li>
          </ul>

          <div className="navbar-text navbar-right navbar-right-marged">
            <a className="btn-sm btn-primary" href="#">Add a category</a>&nbsp;
            <a className="btn-sm btn-primary" href="" data-toggle="modal" data-target="#modalEditBookmark">Add a bookmark</a>
          </div>
          
        </div>
      </footer>
    );
  }
});

module.exports.Footer = Footer;