/*
* 分页组件
* */
var React = require('react');

var PagerBtn = React.createClass({
  getDefaultProps: function () {
    return {
      isCur: false,
      num: 0
    }
  },
  _fn: function () {
    this.props.hasNum(this.props.num);
  },
  render: function () {
    if (this.props.isCur) {
      return (
        <div className="z_pager_page z_pager_cur" onClick={this._fn}>{this.props.num}</div>
      );
    } else {
      return (
        <div className="z_pager_page" onClick={this._fn}>{this.props.num}</div>
      );
    }
  }
});

var Pager = React.createClass({
  getDefaultProps : function () {
    return {
      itemsTotal : 0,
      itemsInPage : 10,
      btnLimit : 10,
      indexPage: 1,
      onTurn : function () {
        console.warn('未绑定翻页回调');
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
    this.setState({
      curPage: this.props.indexPage,
      itemsTotal: this.props.itemsTotal
    });
  },
  _pagesCal : function (num) {
    var begin,tmpArr;
    if(num <= Math.round(this.props.itemsInPage/2)){
      begin = 1;
    }else if(num > Math.round(this.props.itemsInPage/2) && Math.abs((Math.ceil(this.state.itemsTotal/this.state.itemsInPage)-1)-num) >= Math.round(this.props.itemsInPage/2)){
      begin = num - Math.round(this.props.itemsInPage/2) + 1;
    }else if(Math.abs((Math.ceil(this.state.itemsTotal/this.state.itemsInPage)-1)-num) < Math.round(this.props.itemsInPage/2)){
      if(Math.ceil(this.state.itemsTotal/this.state.itemsInPage) > this.props.itemsInPage){
        begin = Math.ceil(this.state.itemsTotal/this.state.itemsInPage) - this.props.itemsInPage;
      }else{
        begin = 1;
      }
    }
    for(var i=begin;i<Math.ceil(this.state.itemsTotal/this.state.itemsInPage);i++){
      tmpArr.push(i);
    }
    this.state.pages = tmpArr;
  },
  _turnTo : function (num) {
    this.props.onTurn(num);
    this._pagesCal(num);
  },
  _turnNext :  function () {
    this.props.onTurn(this.state.curPage+1);
  },
  _turnPrev :  function () {
    this.props.onTurn(this.state.curPage-1);
  },
  _toHead :  function () {
    this.props.onTurn(1);
  },
  _toLast :  function () {
    this.props.onTurn(Math.ceil(this.state.itemsTotal/this.state.itemsInPage));
  },
  render : function () {
    var pages = this.state.pages.map(function (i) {
      if(this.state.curPage == i){
        return this.state.pages? (
          <PagerBtn isCur={true} num={i} hasNum={this._turnTo} />
        ) : null;
      }else{
        return this.state.pages? (
          <PagerBtn isCur={false} num={i} hasNum={this._turnTo} />
        ) : null;
      }
    }.bind(this));
    return (
      <div className="z_pager_container clearfix">
        <div className="z_pager_head" onClick={this._toHead}>首页</div>
        <div className="z_pager_prev" onClick={this._turnPrev}>上一页</div>
          {pages}
        <div className="z_pager_next" onClick={this._turnNext}>下一页</div>
        <div className="z_pager_last" onClick={this._toLast}>尾页</div>
      </div>
    );
  }
});

module.exports = Pager;
