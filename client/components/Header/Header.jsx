import React from 'react'

var Header = React.createClass({
  render: function() {
    return (
      <header>
      	<a href="javascript:;" onClick={ this.props.onClickHandler }>Click Me!</a>
    	</header>
    );
  }
});

export default Header
