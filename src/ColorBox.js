import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const newOpacity = this.props.opacity - 0.1;
    console.log(newOpacity)
    console.log(this.props.opacity >= 0.2)
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        {
          /* your conditional code here! */
          // this.props.opacity >= 0.2 ? (<div className="color-box" style={{opacity: newOpacity}}></div>) : null
          this.props.opacity >= 0.2 ? <ColorBox opacity={newOpacity}/> : null
        }
      </div>
    )
  }
}
