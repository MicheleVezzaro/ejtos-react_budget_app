import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, spending, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (new_buget_val) => {
        if(new_buget_val > 20000) {
            alert("Budget exceeding: it is more than 20000");
            setNewBudget(20000);
            return;
        }
        if(spending > new_buget_val ) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(spending);
            return;
        }
        setNewBudget(new_buget_val);
        dispatch({
            type: 'SET_BUDGET',
            payload: new_buget_val,
        });

    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={event => handleBudgetChange(event.target.value)} ></input>
        </div>
    );
};
export default Budget;