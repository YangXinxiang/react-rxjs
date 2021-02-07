import  Counter  from "./component/Counter";
import RxCounter from "./component/RxCounter";
import createRxTimer from "./component/RxTimer";
import createRxTimer2 from "./component/RxTimer2";
import RxTimer3 from "./component/RxTimer3";
import SimpleCounter from "./component/SimpleCounter";
import './css/App.css';

function App() {
  const RxCounterComp = RxCounter(); // 注意，RxCounter是一个产生组件的方法，需要调用之后产生组件哈。
  const RxTimer = createRxTimer();
  const RxTimer2 = createRxTimer2();
  return (
    <div className="App">
      <div className="leftArea">
        <Counter greeting = "Hello, world~~~~~~" />66
        <RxCounterComp />
        <RxTimer from="mainApp"/>
        <RxTimer2 from="mainApp RxTimer2" />
        <RxTimer3 from="mainApp RxTimer333" />
        <SimpleCounter name="Nancy~~~~~~" />
      </div>      
    </div>
  );
}

export default App;
