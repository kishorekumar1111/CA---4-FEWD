import React, { Component } from 'react'
import './app.css';
import {Link} from 'react-router-dom'

export default class HomeComponent extends Component {
  render() {
    return (
      <div className='whole-page'>
        <div id="container">
            <h1>Quiz App</h1>
           <Link to='/quiz'> <button>Play</button></Link>
        </div>
      </div>
    )
  }
}
