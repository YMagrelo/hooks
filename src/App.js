import React, { useEffect, useState } from "react";

const App = () => {
  const [ value, setValue ] = useState(1);
  const [ visible, setVisible ] = useState(true);

  if(visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <button onClick={() => setValue((v) => v = 1)}>reset</button>
        <PlanetInfo id={value}/>
      </div>
    )
  } else {
    return (
      <button onClick={() => setVisible(true)}>show</button>
    );
  }
};

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
  .then(res => res.json())
  .then(data => data);
}

const useRequest = (request) => {
  const [ dataState, setDataState ] = useState(null);
  
  useEffect(() => {
    let cancelled = false;
    request()
    .then(data => !cancelled && setDataState(data))
    return () => cancelled = true;
  }, [request]);

  return dataState;
}

const usePlanetInfo = (id) => {
  const request = () => getPlanet(id);
  return useRequest(request);
}

const PlanetInfo = ({ id }) => {
  
  const data = usePlanetInfo(id);
  
  return (
    <div>{id} - {data && data.name}</div>
  )
}

export default App;
