import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CarListPage from './pages/CarListPage/CarListPage';
import CarDetailsPage from './pages/CarDetailsPage/CarDetailsPage';
import NotFoundPage from './pages/404Page/NotFoundPage';
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
