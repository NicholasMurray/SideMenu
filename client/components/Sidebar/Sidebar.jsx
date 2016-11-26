import React from 'react'
import Links from '../Links/Links'

var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
        <button onClick={ this.props.onClickHandler }>X</button>
      	<Links />       
    	</div>
    );
  }
});

export default SideBar
