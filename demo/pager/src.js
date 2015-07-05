var React = require('react');

var Pager = require('../../src/pager/pager.react.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div className="book">
        <div className="content">
          <p>页面内容</p>
          <p>12345</p>
          <p>455235</p>
        </div>
        <Pager />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('root'));