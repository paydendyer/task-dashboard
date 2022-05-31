import React, {useContext} from 'react';
import { AppContext } from '../../context/AppContext';

const Remaining = () => {
  const { expenses, budget} = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) =>{
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div className={`alert ${alertType}`}>
      <span>
        <h2 className="budget-h2">Remaining: ${budget - totalExpenses}</h2>
      </span>
    </div>
  )
}

export default Remaining;