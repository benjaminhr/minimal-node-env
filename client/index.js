import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title/Title.js'

class App extends React.Component {
  render() {
    return (
      <Title title='wassup'/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))