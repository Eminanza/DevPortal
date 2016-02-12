var Footer = React.createClass({
  render: function() {
    return (
      <footer className="navbar navbar-inverse navbar-fixed-bottom">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
          <p className="navbar-text navbar-right">(c) 2016 Dev Portal</p>
        </div>
      </footer>
    );
  }
});

module.exports.Footer = Footer;