import React, { Component } from 'react'; 
import UsersComponent from './UserComponent';

export default class MainComponent extends Component {
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div>
        <UsersComponent /> 
      </div>
    )
  }
}