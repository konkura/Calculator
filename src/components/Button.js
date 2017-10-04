import React from 'react';
import '../css/styles.css'

// // Stateless functional component:
// const Button = ({ label, value, buttontype }) => ( //Names need to match the props passed to the Quote component ie <Quote quote={this.state.quote[0]} quotee={this.state.quote[1]} />
//       <button className='btn btn-lg btn-primary'>{label}</button>
// );

//Need a stateful component so we can pass it a common onclick handler
class Button extends React.Component {
  handleClick = () => {
    this.props.onButtonClick(this.props.label);
  }

  render() {
    return (
      <button  className='btn btn-lg btn-primary' onClick={this.handleClick}>
        {this.props.label}
      </button>
    );
  }
}


export default Button;