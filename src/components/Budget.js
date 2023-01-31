import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);

    const maxBudget = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const SubmitEvent = (value) => {
        if (value > maxBudget) {
            alert('You cannot exceed the budget of 20000£');
            return;
        } else if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending');
            return;
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: value
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type='number'
                step='10'
                id="budget"
                value={budget}
                onChange={event => SubmitEvent(event.target.value)}
            ></input>
        </div>
    );
};

export default Budget;
