import  Counter  from "./component/Counter";
import SimpleCounter from "./component/SimpleCounter";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="leftArea">
        <Counter greeting = "Hello, world~~~~~~" />
        <SimpleCounter name="Nancy~~~~~~"/>
      </div>      
    </div>
  );
}

export default App;
