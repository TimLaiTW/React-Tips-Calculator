import React from 'react';
import ResultItem from './ResultItem';

function createData(name, amount, defaultunit, itemdefault) {
  return { name, amount, defaultunit, itemdefault };
}

export default function Calculator(props) {
  var subtotal = Math.round(props.total / (1 + props.tax/100) * 100) / 100;
  var taxCost = Math.round((props.total - subtotal) * 100) / 100;
  var tips = Math.round(subtotal * props.tips) / 100;
  var total = Math.round((tips + Number(props.total)) * 100) / 100;
  var perPerson = Math.round(total / props.person * 100) / 100;
  const essentialRows = [
    createData('Tax', taxCost, props.taxErr ? null: '%', props.taxErr ? props.taxErr : props.tax),
    createData('Tips', tips, '%', props.tips),
    createData('Total', total, null, null),
  ];
  const additionalRows = [
    createData('Total per person', perPerson, ' Person', props.person),
  ]
  return (
    <div>
      {essentialRows.map((row) => (
        <ResultItem 
          key={row.name} 
          name={row.name} 
          amount={row.amount} 
          unit={row.defaultunit} 
          itemdefault={row.itemdefault}/>
      ))}
      {props.showPartition ? 
        <div>
            {additionalRows.map((row) => (
              <ResultItem 
                key={row.name} 
                name={row.name} 
                amount={row.amount} 
                unit={row.defaultunit} 
                itemdefault={row.itemdefault}/>   
            ))}
        </div>
        : null
      }
    </div>
  );
}
