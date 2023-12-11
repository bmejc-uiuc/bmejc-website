import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // had to uninstall and reinstall to allow for Switch component
import Calendar from './components/pages/Calendar';
import Resources from './components/pages/Resources';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Home from './components/pages/Home';
import Opportunities from './components/pages/Opportunities';
import MeetingArchive from './components/pages/MeetingArchive';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch> 
      <Route path='/' exact component={Home} />
        <Route path='/calendar' exact component={Calendar} />
        <Route path='/resources' exact component={Resources} />
        <Route path='/contact-us' exact component={ContactUs} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/opportunities' exact component={Opportunities} />
        <Route path='/meeting-archive' exact component={MeetingArchive} />
      </Switch>
    </Router>
  );
}

export default App;
