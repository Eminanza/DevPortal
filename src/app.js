var React = require('react');
var NavBar = require('./navbar.js').NavBar;
var Footer = require('./footer.js').Footer;
var Bookmarks = require('./bookmarks.js').Bookmarks;
var Categories = require('./categories.js').Categories;
var ModalEditBookmark = require('./modalEditBookmark.js').ModalEditBookmark;


var App = React.createClass({
  getInitialState: function() {
    return { bookmarks: [], categories: [] };
  },

  loadBookmarks : function() {
    $.get({
      url: "http://localhost:5000/bookmarks",
      success: function(data) {
        this.setState({bookmarks: data});
      }.bind(this) //bind(this) because this.setState must use the Stocks object (so it recontextes the function(data) that would otherwise run with the jquery context, not Stocks)
    });
  },

  loadCategories : function() {
    $.get({
      url: "http://localhost:5000/categories",
      success: function(data) {
        this.setState({categories: data});
      }.bind(this) //bind(this) because this.setState must use the Stocks object (so it recontextes the function(data) that would otherwise run with the jquery context, not Stocks)
    });
  },

  componentDidMount: function() {
    this.loadBookmarks();
    this.loadCategories();
    // setInterval(this.loadBookmarks, 2000);
  },

  render: function() {
    return (
        <div>
          <NavBar />
          <div className="under-navbar">
          <Categories categories={this.state.categories} bookmarks={this.state.bookmarks}/>
          </div>
          <Footer />
          <ModalEditBookmark />
        </div>

    );
  }
});

module.exports.App = App;