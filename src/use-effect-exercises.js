import React, { Component, useEffect, useState } from "react";

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

const Notification = () => {
  const [ visible, setVisible ] = useState(true);

  useEffect(() => {
   return setTimeout(() => {
      setVisible(false);
    }, 2500);
  }, []);

  return visible ? <div><p>hello</p></div> : null;
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
