
import React from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import Container from './context/Container';
/* import Hero from './Hero'; */

//create context
//wrap your whole application within the context
// provide data to your context / share data within your app
// utilize context values using useContext Hook
 
/*  export const MyContext = createContext() */  // created context/environment

function App() {

  return (
  <Container> 
      <div className="App">
        <h1>APP Component : Context API</h1>
        <ChildOne />
        <ChildTwo />
  {/*       <Hero> <div><h1>Superman</h1> <h2>Hello Friends</h2></div></Hero>  */}
      </div>
  </Container>
  );
}

export default App;




/* function App() {
  const [counter,setCounter] = useState(0)
  return (
    <div className="App">
      <h1>APP Component : Context API</h1>
      <ChildOne counter={counter} setCounter={setCounter}/>
      <ChildTwo counter = {counter} setCounter={setCounter}/>
    </div>
  );
}

export default App; */