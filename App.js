// All imports
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import { Navbar, Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Main class here - shows navbar and other contents
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      {/* Navbar here */}
        <Navbar bg="dark" variant="dark">

          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Header">Header</Nav.Link>
            <Nav.Link href="/Footer">Footer</Nav.Link>
            <Nav.Link href="/Content">Content</Nav.Link>
          </Nav>
        </Navbar>

      {/* Switch to change between the pages here */}
        <Switch>
          <Route path="/header">
            <Header/>
          </Route>
          <Route path="/footer">
            <Footer/>
          </Route>
          <Route path="/">
            <Content/>
          </Route>
        </Switch>

      </div>
      </Router>
    );
  }
}
export default App;