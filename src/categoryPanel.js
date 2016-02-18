var React = require('react');
var Bookmarks = require('./bookmarks.js').Bookmarks;


var CategoryPanel = React.createClass({
  render: function() {
    var categorizedBookmarks = this.props.bookmarks.filter(function(bookmark) {
      if (bookmark.category === this.props.categoryId) {
        return true;
      } else {
        return false;
      }
    }.bind(this));

    categorizedBookmarks.sort(function (a, b) {
      if (a.name < b.name)
        return -1;
      else if (a.name > b.name)
        return 1;
      else 
        return 0;
    });

    var panelClassName = (this.props.pos === 0) ? "tab-pane active" : "tab-pane";
    return(
      <div role="tabpanel" className={panelClassName} id={"panel" + this.props.categoryId}>
        <Bookmarks bookmarks={categorizedBookmarks} onEditBookmark={this.props.onEditBookmark}/>
      </div>
    );
  }
});

module.exports.CategoryPanel = CategoryPanel;