import React from 'react';
import ResultItem from './ResultItem';

function createData(name, amount, defaultunit, itemdefault, show) {
  return { name, amount, defaultunit, itemdefault, show };
}

export default function Calculator(props) {
  var subtotal = Math.round(props.total / (1 + props.tax/100) * 100) / 100;
  var taxCost = Math.round((props.total - subtotal) * 100) / 100;
  var tips = Math.round(subtotal * props.tips) / 100;
  var total = Math.round((tips + Number(props.total)) * 100) / 100;
  var perPerson = Math.round(total / props.person * 100) / 100;
  const essentialRows = [
    createData('Tax', taxCost, props.tax === -1 ? null: '%', props.tax === -1  ? null : props.tax, props.tax === -1  ? false : true),
    createData('Tips', tips, '%', props.tips, true),
    createData('Total', total, null, null, true),
    createData('Total per person', perPerson, ' Person', props.person, props.person === 1 ? false : true),
  ];

  var showRows = essentialRows.filter(function(essentialRow){
    return essentialRow.show;
  });
  return (
    <div>
      {showRows.map((row) => (
        <ResultItem 
          key={row.name} 
          name={row.name} 
          amount={row.amount} 
          unit={row.defaultunit} 
          itemdefault={row.itemdefault}/>
      ))}
    </div>
  );
}
