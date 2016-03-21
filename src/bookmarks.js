var React = require('react');
var Bookmark = require('./bookmark.js').Bookmark;

var Bookmarks = React.createClass({
  render: function() {
    //Construct an arraw of rows based on the state of the component
    var bookmarkRows = this.props.bookmarks.map(function(bookmark) {
      return (
        <Bookmark key={"book" + bookmark.id} id={bookmark.id} name={bookmark.name} url={bookmark.url} onEditBookmark={this.props.onEditBookmark}/>
      );
    }.bind(this)
    );

    return(
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Url</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {bookmarkRows}
        </tbody>
      </table>
    );
  }
});

module.exports.Bookmarks = Bookmarks;