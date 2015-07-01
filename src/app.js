var React = require('react');

var Pager = require('./pager/pager');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div>Hello {this.props.name}</div>
        <Pager thick='abcdefg' />
      </div>
    );
  }
});

React.render(<App name="John" />, document.body);