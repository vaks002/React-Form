import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import CreateForm from './components/Create/CreateForm';
import Buttons from './components/Buttons';
import ViewForm from './components/ViewForm/ViewForm';

class App extends Component {

    state = {
      isOpen: false
    }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Buttons} />
          <Route  path='/createform' component={CreateForm} />
          <Route  path='/viewform' component={ViewForm}/>
        </Switch>
      </div>
    );
  }

}

export default App;