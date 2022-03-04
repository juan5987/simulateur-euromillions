import React, { useState } from 'react';
import Header from 'components/Header';
import Draw from 'components/Draw';
import 'styles/app.scss';

const draw = {
  numbers: [7, 9, 16, 18, 22],
  stars: [3, 9],
}

export const drawContext = React.createContext();

const App = () => {

  const [drawState, setDrawState] = useState(draw);

  return (
    <drawContext.Provider value={drawState}>
      <div className="app">
        <Header />
        <Draw setDrawState={setDrawState} />
      </div>
    </drawContext.Provider>
  );
}

export default App;
