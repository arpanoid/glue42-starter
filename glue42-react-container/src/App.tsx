import React, { useContext } from 'react';
import './App.css';
import { GlueContext, useGlue } from '@glue42/react-hooks';
import { applications } from './glueConfig';
import AppCard from './card/AppCard';

function App() {
  const glue = useContext(GlueContext);

  const glueAvailabilityLabel = glue ? `Glue(v${(glue.info as any).version}) is available` : 'Glue is not available';

  return (
    <div className="App">
      <header className="App-header">
        <p>{glueAvailabilityLabel}</p>
      </header>
      <div className='App-container'>
        { applications.local.map( app => (<AppCard cardTitle={app.name} cardDescription={app.description} details={app.details} key={app.name}></AppCard>) ) }
      </div>
    </div>
  );
}

export default App;
