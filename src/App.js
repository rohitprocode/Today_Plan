import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div className='container-fluid my-5' >
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
          <div className="text-center"><h1>Today's Plan</h1></div>

          </div>
        </div>
      </div>
    )
  }
}

export default App