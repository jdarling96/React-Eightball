import React from 'react';
import EightBall from './EightBall';
import answers from './helpers/awnsers';

import './App.css';

function App() {
  return (
    <div className="App">
      <EightBall answers={answers} />
      
    </div>
  );
}

export default App;
