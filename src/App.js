import  Counter  from "./component/Counter";
import RxCounter from "./component/RxCounter";
import SimpleCounter from "./component/SimpleCounter";
import './css/App.css';

function App() {
  const RxCounterComp = RxCounter(); // 注意，RxCounter是一个产生组件的方法，需要调用之后产生组件哈。
  return (
    <div className="App">
      <div className="leftArea">
        <Counter greeting = "Hello, world~~~~~~" />66
        <RxCounterComp />
        <SimpleCounter name="Nancy~~~~~~"/>
      </div>      
    </div>
  );
}

export default App;
