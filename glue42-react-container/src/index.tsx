import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlueWebPlatform from "@glue42/web-platform";
import { GlueInitSettings, GlueProvider } from "@glue42/react-hooks";
import { applications, channels } from './glueConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

const settings: any = {
  webPlatform: {
      factory: GlueWebPlatform,
  },
};


ReactDOM.render(
  <GlueProvider settings={settings}>
    <App />
  </GlueProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
