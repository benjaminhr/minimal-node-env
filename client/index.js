import React from 'react'
import ReactDOM from 'react-dom'
import './styles/style.css'

class App extends React.Component {
  render() {
    return (
      <h1>Hello There Mate!</h1>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)