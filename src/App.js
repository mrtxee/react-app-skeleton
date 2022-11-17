import React, {useState} from 'react';
//import '.components/Counter'
import Counter from './components/Counter';

function App() {
  const [inputVal, inputValChanger] = useState('initial text');
  //const [state, stateChangerMethod] = useState(initial_state);
  //likes = 111;



  return (
    <div className="App">
      My app is working
      <h1>{inputVal}</h1>
      <input 
        type='text' 
        value={inputVal}
        onChange={event => inputValChanger( event.target.value )}
        />
        <p>Это пример двустороннего связывания</p>
      <hr/>
        <Counter arg={{name:"счетчик дней", initval:30}}/>
        <Counter arg={{name:"счетчик людей", initval:13}}/>
        
    </div>
  );
}

export default App;
