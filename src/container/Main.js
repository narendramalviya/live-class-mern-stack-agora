import React from 'react'
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";
import Session from '../components/Session/Session';
import Header from '../components/Header/Header';
import Home from '../Screens/Home/Home';
const Main = () => {
    return (
        <>
            <Header/>
          {/* <div>
          <Link to="/"> Home</Link>
          <Link to="/session"> Call</Link>
        </div> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/session" component={Session} />
        </Switch>
        </>
    )
}

export default Main
