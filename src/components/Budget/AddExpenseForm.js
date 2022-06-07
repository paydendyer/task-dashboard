import React, {useContext, useState} from 'react';
import {AppContext} from '../../context/AppContext';
import {v4 as uuidv4} from 'uuid';
import "../../css/output.css";

const AddExpenseForm = () => {
  const {dispatch} = useContext(AppContext);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost)
    };

    dispatch({type: 'ADD_EXPENSE', payload: expense})
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="grid-rows-1">
        <div className="columns-1">
          <label htmlFor="name" className="label-name">
            Name</label>
          <input required='required' type="text" className="form" id="name"
            value={name}
            onChange={
              (event) => setName(event.target.value)
          }></input>
        </div>
        <div className="column-1">
          <label htmlFor="cost" className="label-cost">Cost</label>
          <input required="required" type="text" className="form" id="cost"
            value={cost}
            onChange={
              (event) => setCost(event.target.value)
          }></input>
          <div className="column-1">
            <button type="submit" className="submit-button">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddExpenseForm;
