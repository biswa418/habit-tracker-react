import React, { Component } from 'react'
import Navbar from './Navbar'

export default class App extends Component {
  constructor() {
    super();
    this.theme = 'light'
    this.state = {
      dark: false
    }
  }

  handleTheme = () => {
    this.state.dark ? this.theme = 'light' : this.theme = 'dark'
    this.setState({
      dark: !this.state.dark
    })

    const root = document.getElementsByTagName("html")[0];
    root.className = this.theme;
  }

  render() {
    return (
      <div className='App'>
        <Navbar theme={this.handleTheme} set={this.theme} />
      </div>
    )
  }
}

