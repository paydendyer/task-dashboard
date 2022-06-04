import React, {useState, useContext} from 'react';
import { AppContext } from '../../context/AppContext';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				className='submit-button'
				onClick={() => props.handleSaveClick(value)}
			>
				Save
			</button>
		</>
	);
};

const ViewBudget = (props) => {
	return (
		<>
			<span><h2 className="budget-h2-budget">Budget: ${props.budget}</h2></span>
			<button type='button' className="edit-button" onClick={props.handleEditClick}>
				Edit
			</button>
		</>
	);
};

const BudgetApp = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing ] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_BUDGET',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
      <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
      <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  )
}

export default BudgetApp;