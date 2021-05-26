import React, { Component, useEffect, useState } from "react";

const App = () => {
  const [ value, setValue ] = useState(0);
  const [ visible, setVisible ] = useState(true);

  if(visible) {
    return (
      <div>
        <button onClick={() => setValue((v) => v + 1)}>+</button>
        <button onClick={() => setVisible(false)}>hide</button>
        <button onClick={() => setValue((v) => v = 0)}>reset</button>
        <HookCounter value={value} />
        {/* <ClassCounter value={value} /> */}
      </div>
    )
  } else {
    return (
      <button onClick={() => setVisible(true)}>show</button>
    );
  }
  
};

const HookCounter = ({ value }) => {
  useEffect(() => {
   console.log('mount'); 
  }, [])

  useEffect(() => {
    console.log('update'); 
   })

   useEffect(() => {
    return () => console.log('willUnmount');
   }, [])
  return <p>{value}</p>
}

class ClassCounter extends Component {
  componentDidMount() {
    console.log('class: mount');
  }

  componentDidUpdate(props) {
    console.log('class: update');
  }

  componentWillUnmount() {
    console.log('class: unmount');
  }

  render() {
    return <p>{this.props.value}</p>
  }
}

export default App;
