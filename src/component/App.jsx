import React, { Component } from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Page404, Weekview } from '../pages/';
import { connect } from 'react-redux';

class App extends Component {
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
    const { habits } = this.props;

    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar theme={this.handleTheme} set={this.theme} />
          <Routes>
            <Route path='/' element={<Home set={this.theme} habits={habits} dispatch={this.props.dispatch} />} />
            <Route path='/week-view' element={<Weekview set={this.theme} habits={habits} dispatch={this.props.dispatch} />} />
            <Route path='*' element={<Page404 set={this.theme} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
}

function mapStateToProps(state) {
  return {
    habits: state
  }
}

const ConnectedAppComponent = connect(mapStateToProps)(App)
export default ConnectedAppComponent

