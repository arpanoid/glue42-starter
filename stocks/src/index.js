import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import "./App.css";
import Stocks from "./Stocks";
import * as serviceWorker from "./serviceWorker";
import GlueWeb from '@glue42/web';
import { GlueProvider } from '@glue42/react-hooks';

const settings = {
    web: {
        factory: GlueWeb,
    },
};

ReactDOM.render(
    <GlueProvider settings={settings}>
        <Stocks />
    </GlueProvider>,
    document.getElementById('root')
);

serviceWorker.register();
