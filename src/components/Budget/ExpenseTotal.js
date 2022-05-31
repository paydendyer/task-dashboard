import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

const ExpenseTotal = () => {
  const {expenses} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total,item )=> {
    return (total += item.cost);
  }, 0);

  return (
    <div>
      <span> <h2 className="budget-h2">Spent: ${totalExpenses}</h2></span>
    </div>
  );
};

export default ExpenseTotal;