import React from 'react'
import { Link } from 'react-router'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'
import Stuff from '../Stuff/Stuff'

class About extends React.Component{
  render() {
    var content = 
        <div>
          <Stuff />
          <div><Link to={ { pathname: "/info"} }>info</Link></div>
         </div>
    return (
       <div>
         <Header onClickHandler={ this.props.handleViewSidebar } />
         <SideBar isOpen={ this.props.sidebarOpen } onClickHandler={ this.props.handleViewSidebar } />
         <Content isOpen={ this.props.sidebarOpen } content={ content } />
       </div>
    );
  }
}

export default About
