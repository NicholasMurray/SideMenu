import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'

class Home extends React.Component{
  render() {
    var content = 'This is home';
    return (
       <div>
         <Header onClickHandler={ this.props.handleViewSidebar } />
         <SideBar isOpen={ this.props.sidebarOpen } onClickHandler={ this.props.handleViewSidebar } />
         <Content isOpen={ this.props.sidebarOpen } content={ content } />
       </div>
    );
  }
}

export default Home
