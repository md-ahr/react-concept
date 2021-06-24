import React from 'react';
import ReactDOM from 'react-dom';

// class Clock extends React.Component {
//   render() {
//     return (
//       <h1>Now {this.props.children} - {new Date().toLocaleTimeString(this.props.local)}</h1>
//     );
//   }
// }

// ReactDOM.render(<Clock local="bn-BD">Date</Clock>, document.getElementById('root'));

function Clock ({ local, children }) {
  return (
    <h1>Today {children} - {new Date().toLocaleTimeString(local)}</h1>
  );
};

ReactDOM.render(<Clock local="bn-BD">Date</Clock>, document.getElementById('root'));
