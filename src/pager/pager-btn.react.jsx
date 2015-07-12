var React = require('react');

var PagerBtn = React.createClass({
  getDefaultProps: function () {
    return {
      isCur: false,
      num: 0
    }
  },
  _cb: function () {
    this.props.hasNum(this.props.num);
  },
  render: function () {
    if (this.props.isCur) {
      return (
        <div className="z_pager_page z_pager_cur" onClick={this._cb}>{this.props.num}</div>
      );
    } else {
      return (
        <div className="z_pager_page" onClick={this._cb}>{this.props.num}</div>
      );
    }
  }
});

module.exports = PagerBtn;