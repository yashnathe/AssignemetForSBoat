import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import MovieList from './components/Movies/MovieList';
import BookingForm from './components/Booking/BookingForm';
import AddMovie from './components/Admin/AddMovie';
import AddScreen from './components/Admin/AddScreen';
import AuthState from './context/AuthState';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/movies" component={MovieList} />
              <Route exact path="/book" component={BookingForm} />
              <Route exact path="/admin/addMovie" component={AddMovie} />
              <Route exact path="/admin/addScreen" component={AddScreen} />
            </Switch>
          </div>
        </div>
      </Router>
    </AuthState>
  );
};

export default App;
