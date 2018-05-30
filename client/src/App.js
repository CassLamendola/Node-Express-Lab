import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5555/api/posts')
      .then(res => {
        console.log(res.data)
        this.setState({posts: res.data.users});
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Quotes</h1>
        </header>
        <h2 className="App-intro">
          Posts:
        </h2>
        {this.state.posts.map(post => {
          return(
            <div className="postCard" key={post.id}>
              <h2 className="postTitle">{`"${post.title}"`}</h2>
              <p>{`- ${post.contents}`}</p>
              <div className="buttons">
                <button 
                  className="btn">
                  Update
                </button>
                <button 
                  className="btn delete">
                  Delete
                </button>
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
