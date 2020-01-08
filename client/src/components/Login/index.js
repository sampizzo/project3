import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from "react-router-dom";
import "./style.css";

class Login extends Component {
  constructor(props){
  super(props)
  this.state = { 
    username: "", 
    password: "", 
    redirectTo: null 
  }
}
  handleUsername = (event) => {
    // console.log("typing username", event.target.value)
    this.setState({ username: event.target.value })
  }
  handlePassword = (event) => {
    // console.log("typing username", event.target.value)
    this.setState({ password: event.target.value })
  }
  handleSubmit = () => {
    console.log("about to login", this.state)
    Axios.post("/login", {
      username: this.state.username,
      password: this.state.password,
    })
      .then(response => {
        console.log("from the back end", response)

        if (response.status === 200){
          console.log("good to go!")
        }
        this.setState({ 
          redirectTo: "/menu"
        })
        //set the state to redirect to new page
       
      })
  }

  render() {
    console.log("state", this.state)
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {
      return (
        <div className="rcorners">
          <h1>Login</h1>
          <p>Username</p>
          <input onChange={this.handleUsername}></input>
          <p>Password</p>
          <input onChange={this.handlePassword}></input>
          <button onClick={this.handleSubmit}
          >Submit</button>
        </div>
      );
    }
  }
}

export default Login;