import React from 'react';
import './App.css'
import logo from './logo.svg';

class MyShowcase extends React.Component {
  state = {
    content: undefined
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then(data => data.json()).then((data) => {
      console.log(data)
      this.setState({
        content: JSON.stringify(data[0])
      })
    })
  }

  render () {
    const { content } = this.state
    if (content === undefined) {
      return <img className="App-logo" src={logo} />
    }
    return <div>
      {this.state.content}
    </div>
  }
}

export default MyShowcase;
