import React, { Component } from 'react'
import Rhombus from './Rhombus.gif'
export class spinner extends Component {
  render() {
    return (
        <div className='text-center' style={{  position: 'absolute',top: '50%',left: '50%'}}>
        <img src={Rhombus} alt="loading" />
      </div>
    )
  }
}

export default spinner
