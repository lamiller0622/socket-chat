import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from '../node_modules/react-bootstrap/lib/Form';
import FormGroup from '../node_modules/react-bootstrap/lib/FormGroup';
import ControlLabel from '../node_modules/react-bootstrap/lib/ControlLabel';
import FormControl from '../node_modules/react-bootstrap/lib/FormControl';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Form horizontal>
       <FormGroup controlId="formHorizontalPassword">
            <ControlLabel style={{padding: "20px"}}>Real Time IM App</ControlLabel>
       </FormGroup>
       <FormGroup controlId="formHorizontalPassword">
            <FormControl componentClass="textarea" placeholder="Type Here to begin chat" style={{height: "400px", width: "700px"}} />
        </FormGroup>
        </Form>
      </div>
    );
  }
}

export default App;
