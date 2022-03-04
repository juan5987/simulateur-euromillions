import React from 'react';
import Header from 'components/Header';
import Draw from 'components/Draw';
import 'styles/app.scss';

const draw = {
  numbers: [7, 9, 16, 18, 22],
  stars: [3, 9],
}

export const drawContext = React.createContext(draw);

const App = () => {

  return (
    <drawContext.Provider value={draw}>
      <div className="app">
        <Header />
        <Draw />
      </div>
    </drawContext.Provider>
  );
}

export default App;
