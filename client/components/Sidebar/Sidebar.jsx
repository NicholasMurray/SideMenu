import React from 'react'
import Links from '../Links/Links'
import { Link } from 'react-router'

var SideBar = React.createClass({
  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
        <button onClick={ this.props.onClickHandler }>X</button>
        <a href="#/" onClick={ this.props.onClickHandler }>Home</a><br />
        <a href="#/about" onClick={ this.props.onClickHandler }>About</a><br />
        <a href="#/contact" onClick={ this.props.onClickHandler }>Contact</a><br />
        <Link to={ {pathname: '/contact'} } onClick={() => this.props.onClickHandler }>Contact 7</Link><br />
        <p>testing</p>
      	<Links />       
    	</div>
    );
  }
});

export default SideBar
