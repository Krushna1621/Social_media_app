
import './App.css';
import ShowText from './Components/ShowText';
// import Counter from './Components/Counter';
// import Input from './Components/Input';
import Toggle from './Components/Toggle';
function App() {
  return (
    <div className="App">
    {/* <Counter></Counter> */}
    {/* <div style={{padding:'20px'}}>
    <Input></Input>
    </div> */}
     {/* <User name="Krusha" position="software development" payment="15000"/> */}
    <Toggle></Toggle>
    <ShowText></ShowText>
    </div>
  );
}

// const User=(props)=>{
//     return(
//       <div>
//         <h1>{props.name}</h1>
//         <h1>{props.position}</h1>
//         <h1>{props.payment}</h1>
//       </div>
//     )
// }

export default App;
