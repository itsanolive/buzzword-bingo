import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GA4React from "ga-4-react";

const ga4react = new GA4React(
    'G-H5WYRPWEML',
    { /* ga custom config, optional */ },
    [ /* additional code, optional */],
    5000 /* timeout, optional, defaults is 5000 */
    /* { nonce: ['first-script-is-async','second-script'] } */
  );
  ga4react.initialize().then((ga4) => {
    console.log(ga4);
    ga4.pageview('path')
    ga4.gtag('event', 'pageview', 'path') // or your custom gtag event
  }, (err) => {
    console.error(err)
  })

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
