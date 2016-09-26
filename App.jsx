import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

	constructor() {
		super();
		this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
	};

	findDomNodeHandler() {
		var likeBtn = document.getElementById('like');
		ReactDOM.findDOMNode(likeBtn).innerHTML = "UnLike";
	}

   render() {
      return (
         <div>
            <h1>Hello {this.props.name}</h1>
            <h1>I am from {this.props.country}</h1>
            <a href="#" id="like" onClick = {this.findDomNodeHandler}> Like </a>
            <Header />
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div className = "testHeader">
         	<h2> company : {this.props.company}</h2>
         	<h2> designation : {this.props.designation}</h2>
         </div>
      );
   }
}

App.defaultProps = {
	name : "Ankit",
	country : "India"
}

Header.defaultProps = {
	company : "Cybage Software",
	designation : "Software Engineer"
}

export default App;
