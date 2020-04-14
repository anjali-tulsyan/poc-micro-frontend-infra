
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import rootComponent from './App';
import * as singleSpa from "single-spa";

const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent,
    domElementGetter: () => document.getElementById('insurance-center')
});

export const bootstrap = [
    reactLifecycles.bootstrap,
];

export const mount = [
    reactLifecycles.mount,
];

export const unmount = [
    reactLifecycles.unmount,
];


singleSpa.registerApplication('insurance-center', Promise.resolve({ bootstrap,mount, unmount}), (pathName) => true);

singleSpa.start();


