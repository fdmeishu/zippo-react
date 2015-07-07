/*
* 分页组件
* */
var React = require('react');

var Pager = React.createClass({
  getDefaultProps : function () {
    return {
      itemsTotal : 0,
      itemsInPage : 10,
      btnLimit : 10,
      indexPage: 1,
      onTurn : function () {
        console.log('未绑定翻页回调');
      }
    };
  },
  getInitialState : function () {
    return {
      curPage : 1,
      pages : [1,2,3,4,5,6,7,8,9,10],
      itemsTotal : 0
    }
  },
  componentWillMount : function () {
    this.setState({curPage: this.props.indexPage});
  },
  render : function () {
    var pages = this.state.pages.map(function (i) {
      return this.state.pages? (
        <div className="z_pager_page">{i}</div>
      ) : null;
    }.bind(this));
    return (
      <div className="z_pager_container clearfix">
        <div className="z_pager_first">首页</div>
        <div className="z_pager_prev">上一页</div>
          {pages}
        <div className="z_pager_next">下一页</div>
        <div className="z_pager_last">尾页</div>
      </div>
    );
  }
});

module.exports = Pager;