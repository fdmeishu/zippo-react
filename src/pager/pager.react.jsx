/*
* 分页组件
* */
var React = require('react');
var PagerBtn = require('./pager-btn.react.jsx');

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
    var begin,tmpArr=[];
    if(num <= this._getMedian()){
      begin = 1;
    }else if(num > this._getMedian() && Math.abs((this._getPageLen())-num) >= this._getMedian()){
      begin = num - this._getMedian() + 1;
    }else if(Math.abs((this._getPageLen())-num) < this._getMedian()){
      if(this._getPageLen() > this.props.itemsInPage){
        begin = this._getPageLen() - this.props.btnLimit + 1;
      }else{
        begin = 1;
      }
    }
    for(var i=begin ;i< begin+this.props.btnLimit ;i++){
      tmpArr.push(i);
    }
    this.setState({
      pages : tmpArr,
      curPage : num
    });
  },
  _getPageLen : function () {
    return Math.ceil(this.state.itemsTotal/this.props.itemsInPage);
  },
  _getMedian : function () {
    return Math.round(this.props.itemsInPage/2);
  },
  _turnTo : function (num) {
    this.props.onTurn(num);
    this._pagesCal(num);
  },
  _turnNext : function () {
    var curPage = this.state.curPage;
    this.props.onTurn(curPage+1);
    this._pagesCal(curPage+1);
  },
  _turnPrev : function () {
    var curPage = this.state.curPage;
    this.props.onTurn(curPage-1);
    this._pagesCal(curPage-1);
  },
  _toHead :  function () {
    this.props.onTurn(1);
    this._pagesCal(1);
  },
  _toLast :  function () {
    this.props.onTurn(this._getPageLen());
    this._pagesCal(this._getPageLen());
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
