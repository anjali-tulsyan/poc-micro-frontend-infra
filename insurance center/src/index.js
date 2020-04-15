
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './App';
import * as singleSpa from "single-spa";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
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

// singleSpa.registerApplication('insurance-center', Promise.resolve({ bootstrap,mount, unmount}), (pathName) => true);

// singleSpa.start();


