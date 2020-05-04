
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import RootComponent from './App';
import * as singleSpa from "single-spa";

const wrapper = document.getElementById("lending");

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: RootComponent,
    parcelCanUpdate: true
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export async function mount(props) {
    return reactLifecycles.mount(props);
}

export const unmount = [
    reactLifecycles.unmount,
];


export const update = [
  reactLifecycles.update
];

console.log("file got executed");

wrapper ? ReactDOM.render(<RootComponent />, wrapper) : false;



// singleSpa.registerApplication('insurance-center', Promise.resolve({ bootstrap,mount, unmount}), (pathName) => true);

// singleSpa.start();

