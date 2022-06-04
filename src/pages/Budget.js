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
    <h2 className="expenses"> Expenses</h2>
    <div>
      <div className="expenselist">
        <ExpenseList />
      </div>
    </div>
    <div className='add-expense'>
    <h2>Add Expense</h2>
    <div className="mt-3">
      <div className="column-1">
        <AddExpenseForm />
      </div>
    </div>
    </div>
     </div>
     </AppProvider>
  )
}
export default Budget;