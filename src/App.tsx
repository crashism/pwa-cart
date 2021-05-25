import React, {useState} from 'react';
import CartContainer from './components/cartContainer';
import './App.css';

function App() {

  const [sum, setSum] = useState<any>(0);

  const changeSum = (sum:any) => {
    setSum(sum);
  }
  return (
    <div className="App">
      <header style={{alignItems: "flex-end"}} className="App-header">
        <div style={{marginRight: 20, color:"rgb(204, 83, 27)"}}><h3>Sum = {sum.toLocaleString()}</h3></div>
      </header>
      <div>
        <CartContainer onSum={(total:any) => setSum(total)}/>
      </div>
    </div>
  );
}

export default App;
