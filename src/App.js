import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Media from 'react-media';
import "./index.css";

// core components
import Header from "./components/Header/Header"
import SecondMenu from './components/SecondMenu/SecondMenu'
import Footer from './components/Footer/Footer'

// page components
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Contribution from './pages/Contribution/Contribution'
import Event from './pages/Event/Event'
import ContributionAdd from './pages/Contribution-Add/ContributionAdd'
import ContributionView from './pages/Contribution-View/ContributionView'
import AddEvent from './pages/Add-Event/Add-Event'
import Notification from './pages/Notification/Notification'
import Profile from './pages/Profile/Profile'
import EditProfile from './pages/Profile/Edit-Profile/Edit-Profile'
import Chat from './pages/Message/chat'
import Friends from './pages/Friends/Friends'
import ChatContent from './pages/Message/section/ChatContent'
import Errorpage from './pages/Error/Error'
import FoodRestuarent from './pages/FoodRestuarent/FoodRestuarent'
import FRDetails from './pages/FoodRestuarent/FRDetails/FRDetails'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <SecondMenu></SecondMenu>
        <main className="app-main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
            <Route exact path="/contribution" component={Contribution} />
            <Route exact path="/event" component={Event} />
            <Route path="/event/add" component={AddEvent} />
            <Route path="/contribution/add" component={ContributionAdd} />
            <Route path="/contribution/view" component={ContributionView} />
            <Route path="/notification" component={Notification} />
            <Route exact path="/message" component={Chat} />

            <Route exact path="/profile" component={Profile} />
            <Route path="/profile/edit" component={EditProfile} />
            <Route exact path="/chat" component={Chat} />
            <Route path="/friends" component={Friends} />
            <Route exact path="/restaurants" component={FoodRestuarent} />
            <Route exact path="/restaurants/details" component={FRDetails} />
            <Media query="(max-width: 768px)">
              {matches =>
                matches ? (
                  <Route exact path="/message/details" component={ChatContent} />
                ) : <Errorpage />
              }
            </Media>
            <Route component={Errorpage} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
