import CallBack from "./components/CallBack";
import Compound from "./components/Compound";
import DynamicImport from "./components/DynamicImport";
import Lazy from "./components/Lazy";
import Memo from "./components/Memo";
import RenderProps from "./components/RenderProps";
import Uncontroll from "./components/Uncontroll";
import UseMemo from "./components/UseMemo";


function App() {

  
  return (
    <div >
     <h1>Practise: </h1>
     <Uncontroll/>
     <RenderProps render={({x,y})=>{ return <h3> Position: x:{x} , y:{y}</h3>}}/>
     <Compound/>
     <Lazy/>
     <DynamicImport/>
     <Memo/>
     <CallBack/>
     <UseMemo/>

    </div>
  );
}

export default App;
