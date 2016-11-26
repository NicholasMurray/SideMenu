import React from 'react'

var Content = React.createClass({
  render: function() {
    var contentClass = this.props.isOpen ? 'content open' : 'content';
    var content = this.props.content;
    return (
      <div className={contentClass}>
        <div>I am content fill me up!</div>
        <div>{ content }</div>
      </div>
    );
  }
});

export default Content
