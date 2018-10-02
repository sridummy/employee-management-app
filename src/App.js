import React, { Component } from 'react';
import ListTeamMembers from './components/ListTeamMembers';
import AddTeamMember from './components/AddTeamMember';
import NavBar from './components/Header/NavBar';
import { BrowserRouter,HashRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import EditMember from './components/EditMember';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Container>
            <NavBar />
          </Container>
          <Switch>
            <Route exact path="/" component={ListTeamMembers} />
            <Route exact path="/addTeamMember" component={AddTeamMember} />
            {/* <Route exact path="/editMember/:uniqueid" render={(props => <EditMember {...props} EditMember={EditMember}/>)} /> */}
            <Route exact path="/editMember/:uniqueid" component={EditMember} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}


export default App;
