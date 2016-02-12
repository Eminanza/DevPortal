var Bookmarks = React.createClass({
  render: function() {
    return(
      <table className="table" id="bookmarks">
        <thead>
          <tr>
          <th onClick={this.handleSymbolSort}>Symbol</th>
          <th>Name</th>
          <th>Url</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {Bookmark}
        </tbody>
      </table>
    );
  }
});

module.exports.Bookmarks = Bookmarks;