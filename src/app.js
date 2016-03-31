var React = require('react');
var update = require('react-addons-update');

var NavBar = require('./navbar.js').NavBar;
var Footer = require('./footer.js').Footer;
var Bookmarks = require('./bookmarks.js').Bookmarks;
var Categories = require('./categories.js').Categories;
var ModalEditBookmark = require('./modalEditBookmark.js').ModalEditBookmark;
var ModalEditCategory = require('./modalEditCategory.js').ModalEditCategory;


var App = React.createClass({
  getInitialState: function() {
    return { bookmarks: [], categories: [], currentBookmark: {} };
  },

  loadData : function() {
    $.get({
      url: "http://jsonblob.com/api/56efe092e4b01190df56e24e",
      success: function(data) {
        this.setState({data: data});
      }.bind(this), //bind(this) because this.setState must use the Stocks object (so it recontextes the function(data) that would otherwise run with the jquery context, not Stocks)
      error: function() {
        console.log("Error");
      }
    });
  },

  componentDidMount: function() {
    this.loadData();
  },

  handleEditBookmark: function(bookmark) {
    this.setState({currentBookmark: bookmark});
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Edit a bookmark');
    $('#hidBookmarkId').val(bookmark.id);
    $('#txtBookmarkName').val(bookmark.name);
    $('#txtBookmarkUrl').val(bookmark.url);

    $('#hidBookmarkCategoryId').val(bookmark.category);

     var category = this.state.categories.filter(function( category ) {
       return category.id == bookmark.category;
     });

     $('#ddBookmarkCategoryName').val(category[0].name);

    modalEditBookmark.modal();
  },

  handleDeleteBookmark: function(bookmark) {
     $.ajax({
        type: "DELETE",
        url: "http://jsonblob.com/api/56efe092e4b01190df56e24e/bookmarks/" + bookmark.id,

        success: function(data) {
          this.loadData();
        }.bind(this)
      });
     var test;
  },

  handleAddBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.find('.modal-title').text('Add a bookmark');
    // Empty all fields for save check
    $('#hidBookmarkId').val("");
    $('#txtBookmarkName').val("");
    $('#txtBookmarkUrl').val("");
    $('#hidBookmarkCategoryId').val("");
    $('#ddBookmarkCategoryName').val("");
    modalEditBookmark.modal("show");
  },

  handleSaveBookmark: function() {
    var modalEditBookmark = $("#modalEditBookmark");
    modalEditBookmark.modal("hide");

    var id = Number($('#hidBookmarkId').val());
    var name = $('#txtBookmarkName').val();
    var url = $('#txtBookmarkUrl').val();
    var category = Number($('#hidBookmarkCategoryId').val());

    var bookmark = {
      id: id,
      name: name,
      url: url,
      category : category
    };

  
    var data = this.state.data;
    // Checks if new bookmark or not
    if (bookmark.id)
    {
      // Modify an existing one
      for (var i = data.bookmarks.length - 1; i >= 0; i--) {
        if (data.bookmarks[i].id === bookmark.id)
        {
          data.bookmarks[i] = bookmark;
        }
      }
    }else
    {
      // Add a new one
      // TO DO : check how to add a new id
      data.bookmarks.push(bookmark);
    }
    $.post({   
      url: "http://jsonblob.com/api/56efe092e4b01190df56e24e",
      data: bookmark,
      success: function(data) {
         this.loadData();
      }.bind(this)
    });

  },

  handleSaveCategory: function() {
    var modalEditCategory = $("#modalEditCategory");
    modalEditCategory.modal("hide");

    var id = Number($('#hidCategoryId').val());
    var name = $('#txtCategoryName').val();

    var category = {
      id: id,
      name: name
    };

    // Checks if new category or not
    if (category.id) 
    {
      // Modify an existing one
      $.ajax({   
        type: "PUT",
        url: "http://jsonblob.com/api/56efe092e4b01190df56e24e/categories/" + category.id,
        data: category,
        success: function(data) {
           this.loadData();
        }.bind(this)
      });
    }else
    {
      // Add a new one
      $.post({ 
        url: "http://jsonblob.com/api/56efe092e4b01190df56e24e/categories",
        data: category,
        success: function(data) {
           this.loadData();
        }.bind(this)
      });    
    }
  },

  handleAddCategory: function() {
    var modalEditCategory = $("#modalEditCategory");
    modalEditCategory.find('.modal-title').text('Add a category');
    // Empty all fields for save check
    $('#hidCategoryId').val("");
    $('#txtCategoryName').val("");
    modalEditCategory.modal("show");
  },

  render: function() {
    return (
      <div>

      </div>
    );
  }
});

module.exports.App = App;