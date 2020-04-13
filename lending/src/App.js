import React, { Component } from "react";
import ReactDOM from "react-dom";
import Form from "./components/Form";
import { ApolloProvider } from '@apollo/client';
import client from './apollo/client';
import { Provider } from 'react-redux';
import './assets/main.scss';
import { createStore } from 'redux';
import rootReducer from './redux/reducer.js';
import Count from './components/Count';
import Default from './components/Default';
import Dashboard from './components/Dashboard';
import { Route, Link, BrowserRouter as Router, useLocation } from 'react-router-dom';
import {setCounter} from './redux/actions';

const store = createStore(rootReducer);

const routePrefix = 'insuranceCenter'; 


const wrapper = document.getElementById("container");
console.log(client, "client appollo provider");

const App = (props) => {
  
  //store.dispatch(setCounter(props.count));

  return (
  	<ApolloProvider client={client}>
  		<Provider store={store}>
	  		<div className="app-wrapper"> 

			    
		   		<h1> Lending </h1>
			   		 

				<Router basename="/lending">
				   	<div className="main-body"> 
			   			<Route  exact path="/" component={Default} />
					    <Route  exact path="/apolloExample" component={Form} />
					    <Route  exact path="/reduxExample" component={Count} />
					    <Route  exact path="/dashboard" component={Dashboard} />
			    	</div>
		    	</Router>

 
			</div>
		</Provider>
  	</ApolloProvider>
  )
};


export default App;

