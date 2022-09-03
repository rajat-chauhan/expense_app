import React, { useState } from "react";
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';

function NewExpense(props) {

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setFormCondition(true);
    }
    
    const [isFormClose, setFormCondition] = useState(true);

    function closeExpenseInputForm(){
        setFormCondition(true);
    }
    function openExpenseInputForm(){
        setFormCondition(false);
    }


    return (
        <div className="new-expense">
            {!isFormClose && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onClickingCancel = {closeExpenseInputForm}/> }
            {isFormClose && <button onClick={openExpenseInputForm}> Add New Expense </button>}
        </div>
    )
}

export default NewExpense;