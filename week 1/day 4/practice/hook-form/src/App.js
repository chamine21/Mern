import './App.css';
import form from './components/form';
function App() {
  const animals = ["lion", "tiger", "bird", "cat"];
  const x = 20;
  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  return (
    <div className="App">
      {/* <fieldset>
      <legend>App.js</legend>
      <h1>More React !</h1>
      </fieldset> */}
      {/* <AfternoonCompoent number={x} alice = {9} person={person}/> */}
      {/* <ClassComponentReview person={person}/>
      <FunctionalComponent person={person} price={999} animals = {animals}/> */}
      <form/> 
      </div>
  );
  }

export default App;