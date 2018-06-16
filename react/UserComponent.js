import React, { Component } from 'react'; 
import api from '../api'; 

export default class UsersComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    const users = api.getUsers(); 
    this.setState({
      users
    });
  }

  render() {
    const users = this.state.users.map((user, index) => {
      const {name, age} = user; 
      return <p key={index}>{index} - {name} is {age}</p>
    })
    return (
      <div>
        {users}
      </div>
    )
  }
}