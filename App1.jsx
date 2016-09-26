import React from 'react';

class App1 extends React.Component {
   render() {

		var myStyle = {
			fontSize: 50,
			color: '#0000FF'
		}

      return (
         <div className="test1">
            <h1 style = {myStyle}>Facourite Color</h1>
            <p>{1+1}</p>
         </div>
      );
   }
}

export default App1;