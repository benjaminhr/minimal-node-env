import React from 'react'
import './Title.scss'

class Title extends React.Component {
  render() {
    return (
      <div className='title'>
        <p>{this.props.title}</p>
      </div>
    )
  }
}

export default Title