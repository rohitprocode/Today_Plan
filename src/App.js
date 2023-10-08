import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'
import Plan from './Plan';

class App extends Component {
  state ={
    items : [],
    text : "" 
  }
  handlerClick = e =>{
    this.setState({
      text : e.target.value
    })
  }
  handleAdd = e =>{
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({
        items : items,
        text : ""
      })
     }
    }
  
  render() {
    return (
      <div className='container-fluid my-5' >
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center" >Today's Plan</h2>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' name="" id="" placeholder='Write Plan Here' value={this.state.text}  onChange={this.handlerClick}/>
            </div>
            <div className="col-2">
              <button className='btn btn-warning px-5 fw-bold' onClick={this.handleAdd} >Add</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5 ">
                <Plan/>
                {console.log(this.state.items)}
                </ul>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App