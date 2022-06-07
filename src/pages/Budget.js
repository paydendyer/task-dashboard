import React from 'react';
import AddExpenseForm from '../components/Budget/AddExpenseForm';
import BudgetApp from '../components/Budget/BudgetApp';
import ExpenseList from '../components/Budget/ExpenseList';
import ExpenseTotal from '../components/Budget/ExpenseTotal';
import Remaining from '../components/Budget/Remaining';
import { AppProvider } from '../context/AppContext';


const Budget = () => {
  return (
    <AppProvider >
    <div className='my-container'>
      <h1 className="budget-h1"> Budget</h1>
      <div className="grid">
        <div className='budget-section'>
      <BudgetApp/>
      </div>
    <div className = 'remaining'>
      <Remaining />
    </div>
    <div className="expensetotal">
      <ExpenseTotal/>
    </div>
    </div>
   
    <div className='expenses-group'>
      <h2 className="expenses"> Expenses</h2>
      <div className="expenselist"> 
      
        <ExpenseList />
      </div>
    </div>
    <div className='add-expenses-group'>
    <h2 className='add-expenses'>Add Expense</h2>
    <div className='add-expense'>
        <AddExpenseForm />
        </div>
      </div>
    </div>
     </AppProvider>
  )
}
export default Budget;