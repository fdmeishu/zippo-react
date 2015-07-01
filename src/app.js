var React = require('react');

var Pager = require('./pager/pager');

var App = React.createClass({
  render: function () {
    return (
      <div class="book">
        <div class="content">Hello {this.props.name}</div>
        <Pager thick='abcdefg' />
      </div>
    );
  }
});

React.render(<App name="John" />, document.getElementById('root'));