import React from 'react'
import { Link } from 'react-router'

var Links = React.createClass({
  render: function() {
    return (
      <ul>
        <li><Link to={ {pathname: '/'} }>Home</Link></li>
        <li><Link to={ {pathname: '/about'} }>About</Link></li>
        <li><Link to={ {pathname: '/contact'} }>Contact</Link></li>
      </ul>
    )
  }
})

export default Links
