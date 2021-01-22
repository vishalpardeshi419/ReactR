import logo from './logo.svg';

import { connect } from 'react-redux';
import './App.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col">
            <div><span>A: </span><span>{this.props.a}</span></div>
            <button onClick={() => this.props.updateA(this.props.b)}>Update A</button>
        </div>
        <div className="col">
            <div><span>B: </span><span>{this.props.b}</span></div>
            <button onClick={() => this.props.updateB(this.props.a)}>Update B</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return {
    a: store.rA.a,
    b: store.rB.b
  }
};

const mapDispachToProps = (dispach) =>  {
  return {
    updateA: (b) => dispach({type : "UPDATE_A", b:b}),
    updateB: (a) => dispach({type : "UPDATE_B", a:a})
  }
}

export default  connect(mapStoreToProps, mapDispachToProps) (App);
