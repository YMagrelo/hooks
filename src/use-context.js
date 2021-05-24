import React, { useContext, useState } from "react";

const MyContext = React.createContext();

const App = () => {
  return (
    <MyContext.Provider value="Hello world with context">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return (
    <p>{value}</p>
  )
}

export default App;
