import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'

var Home = React.createClass({
  render: function() {
    var content = 'This is home';
    return (
       <div>
         <Header onClickHandler={ this.props.handleViewSidebar } />
         <SideBar isOpen={ this.props.sidebarOpen } onClickHandler={ this.props.handleViewSidebar } />
         <Content isOpen={ this.props.sidebarOpen } content={ content } />
       </div>
    );
  }
});

export default Home
