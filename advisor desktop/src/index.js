import React, { Component } from "react";
//import {React} from './utils/npmPackages';
import ReactDOM from "react-dom";
import InsuranceCenter  from "./components/InsuranceCenter";
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { Provider } from 'react-redux';
import './assets/main.scss';
import { createStore } from 'redux';
import rootReducer from './redux/reducer.js';
import Default from './components/Default';
import Lending from './components/Lending';
import Dashboard from './components/Dashboard';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import { Button, ButtonGroup } from '@material-ui/core';
import * as singleSpa from 'single-spa';
import {registerReactApp} from "./single-spa/react-app";

const store = createStore(rootReducer);
 

const wrapper = document.getElementById("container");

const App = () => (
  <ApolloProvider client={client}>
  		<Provider store={store}>
  			<Router>
	  		<div className="app-wrapper"> 

			   <div className="header"> 
			   		<h1> ADVISOR DESKTOP </h1>
			   		<h1>H E A D E R </h1>
	   				<Default />
				</div>

		    	<div className="main-body"> 
					
						    <Route path="/insuranceCenter" component={InsuranceCenter} />
						    <Route path="/lending" component={Lending} />
						    <Route path="/dashboard" component={Dashboard} />
		    		
		    	</div>
		    	

			   <div className="footer">
			   		<h1> ADVISOR DESKTOP </h1>
			   		<h1>F O O T E R </h1>
			   </div>
			</div>
			</Router>
		</Provider>
  </ApolloProvider>
);




wrapper ? ReactDOM.render(<App />, wrapper) : false;

registerReactApp();

singleSpa.start();