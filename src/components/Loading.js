import React, { Component } from 'react'
import loading from './loading.gif'

export class Loading extends Component {
  render() {
    return (
      <div  className="text-center my-3" >
        <img className="my-3" src={loading}  alt = {loading} />
      </div>
    )
  }
}

export default Loading
