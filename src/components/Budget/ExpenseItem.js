import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../../context/AppContext';
const ExpenseItem = (props) => {
  const {dispatch} = useContext(AppContext);

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    })
  }
  return (
   
      <div>
         <li>
      <h3 className='props-name'>{props.name} </h3>
        <span className='props-cost'>
          ${props.cost}
          <span className='budget-delete'> <TiDelete size='1.3em' onClick={handleDeleteExpense}></TiDelete></span>
      </span>
      </li>
      </div>
  )
}
export default ExpenseItem;