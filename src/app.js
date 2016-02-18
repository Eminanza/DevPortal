var React = require('react');
var NavBar = require('./navbar.js').NavBar;
var Footer = require('./footer.js').Footer;
var Bookmarks = require('./bookmarks.js').Bookmarks;
var Categories = require('./categories.js').Categories;
var ModalEditBookmark = require('./modalEditBookmark.js').ModalEditBookmark;


var App = React.createClass({
  getInitialState: function() {
    return { bookmarks: [], categories: [], currentBookmark: {} };
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

  handleEditBookmark: function(bookmark) {
    this.setState({currentBookmark: bookmark});
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Edit a bookmark');
    $('#hidBookmarkId').val(bookmark.id);
    $('#txtBookmarkName').val(bookmark.name);
    $('#txtBookmarkUrl').val(bookmark.url);

    $('#hidBookmarkCategoryId').val(bookmark.category);
    //continue!!! for categories
    // get the cat name from the list -> field

    modalEditBookmark.modal();
  },

  handleAddBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Add a bookmark');
    $('#txtBookmarkName').val("");
    $('#txtBookmarkUrl').val("");
    modalEditBookmark.modal("show");
  },

  handleSaveBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.modal("hide");
  },

  handleAddCategory: function() {
  },

  render: function() {
    return (
      <div>
        <NavBar />
        <div className="under-navbar">
        <Categories categories={this.state.categories} bookmarks={this.state.bookmarks} onEditBookmark={this.handleEditBookmark}/>
        </div>
        <Footer onAddBookmark={this.handleAddBookmark} onAddCategory={this.handleAddCategory}/>
        <ModalEditBookmark categories={this.state.categories} onSave={this.handleSaveBookmark}/>
      </div>
    );
  }
});

module.exports.App = App;