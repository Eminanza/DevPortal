var React = require('react');

var Bookmark = React.createClass({
  editBookmark: function() {
    event.preventDefault();

    var bookmark = {};
    bookmark.id = this.props.id;
    bookmark.name = this.props.name;
    bookmark.url = this.props.url;

    this.props.onEditBookmark(bookmark);
  },

  render: function() {
    return(
      <tr>
        <td className="nowrap">{this.props.name}</td>
        <td><small><a href={this.props.url}>{this.props.url}</a></small></td>
        <td><a className="btn-sm btn-primary" href="#" onClick={this.editBookmark}>Edit</a></td>
      </tr>
    );
  }
});

module.exports.Bookmark = Bookmark;