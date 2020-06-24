import React, {Component} from 'react';
import './App.css';
import Shape from './Shape.js';

class Selector extends Component {
  constructor(){
    super();
    this.state = {
      selectedShape: 'have not clicked on a shape',
    };

    selectShape = (shape) => {
      this.setState({
        selectedShape: shape,
        isClicked: this.state.isClicked,
      });
    };

    handleClick = () => {
      this.setState({
        isClicked: 'true',
      });
    };

    render(){      
      const { selectedShape, isClicked } = this.state;      

      return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>{selectedShape}</span></div>
        </div>
        <div className="shape-list">
          <Shape shape="square" selectShape={this.selectShape} />
          <Shape shape="circle" selectShape={this.selectShape} />
          <Shape shape="triangle" selectShape={this.selectShape} />
        </div>
      </div>
      );
    };
};