import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='container-fluid my-5' >
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <h2 className="text-center" >Today's Plan</h2>
          <div className="row">
            <div className="col-9">
              <input type="text" className='form-control' name="" id="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App