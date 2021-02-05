import  Counter  from "./component/counter";
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="leftArea">
        <Counter greeting = "Hello, world~~" />
      </div>      
    </div>
  );
}

export default App;
