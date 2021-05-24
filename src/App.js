import React, { useState } from 'react';

const App = () => {
  
  return (
    <div className="App">
      <HookSwitcher />
    </div>
  );
}

const HookSwitcher = () => {
  const [ themeColor, setThemeColor ] = useState('white');
  
  return (
    <div style={{ padding: '10px', backgroundColor: themeColor}}>
      <button onClick={() => {setThemeColor('black')}}>Dark</button>
      <button onClick={() => {setThemeColor('white')}}>Light</button>
    </div>
  )
}

export default App;
