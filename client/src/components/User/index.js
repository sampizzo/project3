import React from 'react';
import Axios from 'axios';

class User extends React.Component {
state = {username: "", password: ""}
handlelogout (){
  Axios.post("/logout").then((response)=>{
    console.log("log out response", response)
  }) 
}
  render() {
    console.log("state", this.state)
    return (
      <div>
        <h1> User Page</h1>
        <button onClick= {this.handlelogout}>Log Out</button>
      </div>
    );
  }
}

export default User;