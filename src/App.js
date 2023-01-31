import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import CurrencyDropdown from './components/CurrencyDropdown';

import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1>Company`s Budget Allocation</h1>
                
                <div className='row'>
                    <div className="col-sm">
                        <Budget></Budget>
                    </div>
                    <div className="col-sm">
                        <Remaining></Remaining>
                    </div>
                    <div className="col-sm">
                        <ExpenseTotal></ExpenseTotal>
                    </div>
                    <div className="col-sm">
                        <CurrencyDropdown></CurrencyDropdown>
                    </div>
                </div>

                <h3>Allocation</h3>

                <ExpenseList></ExpenseList>

                <h3>Change allocation</h3>

                <AllocationForm></AllocationForm>
            </div>
        </AppProvider>
    );
};
export default App;
