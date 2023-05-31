import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Weekview from './Weekview';
import Home from '../pages/Home';
import Page404 from '../pages/Page404';

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

    //set root theme
    const root = document.getElementsByTagName("html")[0];
    root.className = this.theme;
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar theme={this.handleTheme} set={this.theme} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/week-view' element={<Weekview />} />
            <Route path='*' element={<Page404 set={this.theme} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

