import React from 'react';
import { hydrate, render } from 'react-dom';
import './index.css'; // This line is important
import App from './App';
import { initGA } from "./utils/analytics";

initGA("cookieless");

const rootElement = document.getElementById('root');

// Support react-snap pre-rendering
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}