import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { CarListPage, CarDetailsPage, NotFoundPage } from 'pages';
function App() {
  return (
    <Router>
        <div data-testid="router">
          <Switch>
            <Route exact path="/" component={CarListPage}/>
            <Route path="/cars" component={CarListPage}/>
            <Route path="/car/:stockNumber" component={CarDetailsPage}/>
            <Route component={NotFoundPage} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
