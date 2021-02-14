import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import Park from "./Components/Park/Park";
import NationalParks from "./Components/NationalParks/NationalParks";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">
          <h1>National Parks Home Page</h1>
        </Link>
        <Link to="/nationalparks">
          <h2>National Parks List</h2>
        </Link>
      </nav>
      <Switch>
        <Route
          exact
          path="/nationalparks/:id"
          render={(routerProps) => {
            return <Park routerProps={routerProps} />;
          }}
        />
        <Route path="/nationalparks" component={NationalParks} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
