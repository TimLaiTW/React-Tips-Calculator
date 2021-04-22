import React, { useState } from 'react';
import SalesTaxByState from './component/SalesTaxByState'
import InputField from './component/InputField';
import TipsGroup from './component/TipsGroup';
import Calculator from './component/Calculator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [showTotal, setShowTotal] = useState(false);
  const [showPartition, setShowPartition] = useState(false);
  const [salesTax, setSalesTax] = useState(0);
  const [taxErr, setTaxErr] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [tips, setTips] = useState(15);
  const [partition, setPartition] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <label>Tips Calculator</label>
        <SalesTaxByState 
          getTaxs = {taxs =>{
            setSalesTax(taxs)
          }}
          getTaxErr = {err => {
            setTaxErr(err)
          }}  
        />
        <InputField
          label="Total Amount"
          locked={false}
          active={false}
          onChange={amount => {
            setTotalAmount(amount)
            if (amount){  
              setShowTotal(true)  
            }
          }}
        />
        <InputField
          label="Size of Group"
          defaultValue={1}
          locked={false}
          active={false}
          onChange={person => {
            setPartition(person)
            if (person > 1){
              setShowPartition(true)
            }
          }}
        />
        <TipsGroup onChange={tips => {
          setTips(tips)
        }}/>
        {showTotal ? 
          <Calculator 
            total={totalAmount} 
            tax={salesTax}
            taxErr={taxErr} 
            tips={tips} 
            person={partition} 
            showPartition={showPartition}/> 
          : null
        }
      </header>
    </div>
  );
}

export default App;
  