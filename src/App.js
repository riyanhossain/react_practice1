
import './App.css';
import Component1 from './component1';
import Component2 from './component2';
import ContexAPI from './contexAPI';
function App() {
  return (
    <div className="app" id='app'>
      
      <div>
      <div className="dv1">
        hello
      </div>
      <div className="dv2"></div>
      <div className="dv3"></div>
      <div className="dv4"></div>
      </div>
      <ContexAPI>
        <Component1/>
        <Component2/>
      </ContexAPI>
      
    </div>
  );
}

export default App;
