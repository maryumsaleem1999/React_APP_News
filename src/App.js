
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'



export default class App extends Component {
 apikey = 'c3c01b4d58984652bc25e54fba3b6dd9';
 
  state = {
 progress : 0

  }
  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <>
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
       
      />
          <Navbar />
          <Routes>
            <Route exat  path="/" element={<News setProgress = {this.setProgress} apikey={this.apikey}  key="technology" category="technology" country="ph" title="Top News"/>} />
            <Route exat  path="/business" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="business" category="business" country="ph" title="Business News" />} />
            <Route exat  path="/entertainment" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="entertainment" category="entertainment" country="ph" title="Entertainment News" />} />
            <Route exat  path="/general" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="general" category="general" country="ph" title="General News" />} />
            <Route exat  path="/health" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="health" category="health" country="ph" title="Health News" />} />
            <Route exat  path="/science" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="science" category="science" country="ph" title="Science News" />} />
            <Route exat  path="/sports" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="sports" category="sports" country="ph" title="Sports News" />} />
            <Route exat  path="/technology" element={<News setProgress = {this.setProgress} apikey={this.apikey} key="technology" category="technology" country="ph" title="Technology News" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
    )
  }
}




