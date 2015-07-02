/*
* 分页组件
* */
var React = require('react');

var Pager = React.createClass({
  render : function () {
    return (
      <div class="z_pager_container">
        <div class="z_pager_first">首页</div>
        <div class="z_pager_prev">上一页</div>
        <div class="z_pager_wrap">

        </div>
        <div class="z_pager_next">下一页</div>
        <div class="z_pager_last">尾页</div>
      </div>
    );
  }
});

module.exports = Pager;