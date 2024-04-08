import logo from './logo.svg';
import Header from './components/header.jsx';
import Body from './components/body.jsx';
import Stateless_component from './components/stateless_component.js';
//This is the main component
//NOTE: Include the other components here
function App() {
  return (
    <div className="App">
        <Header />
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          This is what we know ohhhh
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Body />
        {/* <Stateless_component /> */}

    </div>
  );
}

export default App;
