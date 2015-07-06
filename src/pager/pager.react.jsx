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
      onTurn : function () {
        console.log('未绑定翻页回调');
      }
    };
  },
  getInitialState : function () {
    return {
      curPage : 1,
      btnArr : [],
      itemsTotal : 0
    }
  },
  componentWillMount : function () {

  },
  render : function () {
    var pages = this.state.btnArr.map(function (i) {
      
    }).bind(this);
    return (
      <div className="z_pager_container clearfix">
        <div className="z_pager_first">首页</div>
        <div className="z_pager_prev">上一页</div>
        <div className="z_pager_wrap">

        </div>
        <div className="z_pager_next">下一页</div>
        <div className="z_pager_last">尾页</div>
      </div>
    );
  }
});

module.exports = Pager;