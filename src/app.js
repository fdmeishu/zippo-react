var React = require('react');

var App = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

React.render(<App name="John" />, document.body);