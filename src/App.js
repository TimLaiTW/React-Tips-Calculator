import React, { useState } from 'react';
import SalesTaxByState from './component/SalesTaxByState'
import InputField from './component/InputField';
import TipsGroup from './component/TipsGroup';
import Calculator from './component/Calculator';
import tipsTip from './tips_tip.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [salesTax, setSalesTax] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tips, setTips] = useState(15);
  const [partition, setPartition] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={ tipsTip } alt="" />
        <SalesTaxByState 
          getTaxs = {taxs =>{
            setSalesTax(taxs)
          }}
        />
        <InputField
          label="Total Amount"
          locked={false}
          active={false}
          onChange={amount => {
            setTotalAmount(amount)
          }}
        />
        <InputField
          label="Size of Group"
          defaultValue={1}
          locked={false}
          active={false}
          onChange={person => {
            setPartition(person)
          }}
        />
        <TipsGroup onChange={tips => {
          setTips(tips)
        }}/>
        {totalAmount ? 
          <Calculator 
            total={totalAmount} 
            tax={salesTax} 
            tips={tips} 
            person={partition} 
            /> 
          : null
        }
      </header>
    </div>
  );
}

export default App;
  