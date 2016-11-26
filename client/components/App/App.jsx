import React from 'react'

var App = React.createClass({
  getInitialState(){
    return {sidebarOpen: false};
  },
  handleViewSidebar(){  
    this.setState({sidebarOpen: !this.state.sidebarOpen});
  },
  render() {
    const childWithProps = 
      React.Children.map(
        this.props.children, 
          child => {
            return (
              React.cloneElement(child, {
                sidebarOpen : this.state.sidebarOpen,
                handleViewSidebar: this.handleViewSidebar
              }
            )
           )
          }
      )
    return (
       <div>
         {childWithProps}
       </div>
    );
  }
})

export default App
