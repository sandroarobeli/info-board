import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/navbar'
import InfoList from './components/infoList'
import EditInfo from './components/editInfo'
import CreateInfo from './components/createInfo'
import CreateUser from './components/createUser'
import Translator from './components/translator'
import NotFoundPage from './components/notFoundPage'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <Switch>
          <Route path='/' component={InfoList} exact></Route>
          <Route path='/edit/:id' component={EditInfo}></Route>
          <Route path='/create' component={CreateInfo}></Route>
          <Route path='/user' component={CreateUser}></Route>
          <Route path='/translate' component={Translator}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>     
      </div>  
    </Router>
  );
}

export default App;
