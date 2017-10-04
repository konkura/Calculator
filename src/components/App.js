import React from 'react';
import _ from 'underscore';
import '../css/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Button from './Button.js';

let buttons = [{ name: '0', type: 'number', value: 0 },
{ name: '1', type: 'number', value: 0 },
{ name: '2', type: 'number', value: 1 },
{ name: '3', type: 'number', value: 2 },
{ name: '4', type: 'number', value: 3 },
{ name: '5', type: 'number', value: 4 },
{ name: '6', type: 'number', value: 5 },
{ name: '7', type: 'number', value: 6 },
{ name: '8', type: 'number', value: 7 },
{ name: '9', type: 'number', value: 8 },
{ name: '+', type: 'operator', value: null },
{ name: '=', type: 'operator', value: null },
{ name: 'C', type: 'operator', value: null },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    // Put the array of currently selected emojis in the state so we can persist it and pass it to the EmojiList for display
    this.state = { expression: '' };
    //Functions that affect the state need have "this" bound so that they operate on the right "this":
    this.addToExpression = this.addToExpression.bind(this);
  }
  renderButtons() {
    return buttons.map((item, index) => {
      return (
        <Button onButtonClick={this.addToExpression} key={index} label={item.name} value={item.value} />  //map the data to the item props, including passing the toggleTodo function from the App's props so it can be used in the TodoListItem but affect the App's state.  key isn't currently used, but pass it index to shut up warning messages!
      )
    });
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Calculator</h1>
        </div>

        <h2>{this.state.expression}</h2>

        {this.renderButtons()}
      </div>
    );
  }

  addToExpression(buttonlabel) {
    if (buttonlabel === 'C') {
      this.setState({ expression: '' });
      return;
    }
    if (buttonlabel === '=') {
      let exp = this.state.expression;
      let val = eval(exp);
      this.setState({ expression: val });
      return;
    }

    this.setState({ expression: this.state.expression + buttonlabel });
  }
}

export default App;

