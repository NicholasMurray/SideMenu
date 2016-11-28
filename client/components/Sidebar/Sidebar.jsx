import { hashHistory } from 'react-router'
import { withRouter } from 'react-router';

var SideBar = React.createClass({

  onButtonClickHandler: function(pageToNaviagateTo) {
    
    this.props.onClickHandler()

    setTimeout(() => {
      var currentHref = window.location.href
      var currentPath = currentHref.split('/').pop()

      if (currentPath !== pageToNaviagateTo) {
        hashHistory.push(pageToNaviagateTo)
      }
    }, 300);
  },

  render: function() {
    var sidebarClass = this.props.isOpen ? 'sidebar open' : 'sidebar';
    return (
      <div className={sidebarClass}>
        <button onClick={ this.props.onClickHandler }>X</button>
        <a href="#/" onClick={ this.props.onClickHandler }>Home</a><br />
        <a href="#/about" onClick={ this.props.onClickHandler }>About</a><br />
        <a href="#/contact" onClick={ this.props.onClickHandler }>Contact</a><br />
        <button onClick={() => this.onButtonClickHandler('contact') }>Contact Button 15</button><br />
        <p>testing</p>
      	<Links />       
    	</div>
    );
  }
});

export default SideBar

