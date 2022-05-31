import React, { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload ],
      };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload
      ),
      };
  case 'SET_BUDGET':
  return {
    ...state,
    budget: action.payload,
  }
   
    default:
      return state; 
    }
};

// Sets the initial state
const initialState = {
  budget: 3000,
  expenses: [
    {id: 12, name: 'Shopping', cost: 40},
    {id: 12, name: 'Groceries', cost: 400},
  ],
};

//Creates the context
export const AppContext = createContext();

// Provider Component
export const AppProvider = (props) => {
  // Sets up the app state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Returns the context
  return(<AppContext.Provider value={{
    budget: state.budget,
    expenses: state.expenses,
    dispatch,
  }}>
    {props.children}
     </AppContext.Provider>)
};