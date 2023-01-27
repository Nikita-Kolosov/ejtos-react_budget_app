import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllocationForm from './components/AllocationForm.js';
import Budget from './components/Budget.js';
import Remaining from './components/Remaining.js';
import ExpenseTotal from './components/ExpenseTotal.js';
import ExpenseList from './components/ExpenseList';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1>Company`s Budget Allocation</h1>
                
                <div className='row'>
                    <div class="col-sm">
                        <Budget></Budget>
                    </div>
                    <div class="col-sm">
                        <Remaining></Remaining>
                    </div>
                    <div class="col-sm">
                        <ExpenseTotal></ExpenseTotal>
                    </div>
                </div>

                <h3>Allocation</h3>

                <ExpenseList></ExpenseList>
                <AllocationForm></AllocationForm>
            </div>
        </AppProvider>
    );
};
export default App;
