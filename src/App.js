import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

export default class App extends Component {
  apikey=process.env.REACT_APP_NEWS_API
      state = {
        progress:0
      }
       setProgress = (progress) =>{
        this.setState({progress:progress})
       }   
      render() {
        return (
          <Router>
          <NavBar/>
          <LoadingBar
                  color='#f11946'
                  progress={this.state.progress}
                  height={1.5}
                />
            <Routes>
                  <Route path='/' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'general'} pagesize={20} category='general' />}></Route>
                  <Route path='/business' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'business'} pagesize={20} category='business' />}></Route>
                  <Route path='/entertainment' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'entertainment'} pagesize={20} category='entertainment'/>}></Route>
                  <Route path='/health' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'health'} pagesize={20} category='health'/>}></Route>
                  <Route path='/science' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'science'} pagesize={20} category='science'/>}></Route>
                  <Route path='/technology' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'technology'} pagesize={20} category='technology'/>}></Route>
                  <Route path='/sports' element={<News apikey={this.apikey} setProgress={this.setProgress} key={'sports'} pagesize={20} category='sports'/>}></Route>
            </Routes>
        </Router>
        )
      }
    }