import React from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Content from '../Content/Content'

class Contact extends React.Component{
  componentWillUnmount(callback) {
       setTimeout( () => {
          console.log('leaving contact 3');
        },1000);
    }
  render() {
    var content = 'This is Contact';
    return (
       <div>
         <Header onClickHandler={ this.props.handleViewSidebar } />
         <SideBar isOpen={ this.props.sidebarOpen } onClickHandler={ this.props.handleViewSidebar } />
         <Content isOpen={ this.props.sidebarOpen } content={ content } />
       </div>
    );
  }
}

export default Contact
