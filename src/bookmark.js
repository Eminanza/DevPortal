var React = require('react');

var Bookmark = React.createClass({
  render: function() {
    return(
      <tr>
        <td className="nowrap">{this.props.name}</td>
        <td><small><a href={this.props.url}>{this.props.url}</a></small></td>
        <td><a className="btn-sm btn-primary" href="#">Edit</a></td>
      </tr>
    );
  }
});

module.exports.Bookmark = Bookmark;