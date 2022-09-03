import React, { useState } from "react";
import './ExpenseForm.css';

function ExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput, setUserInput] = useState( { enteredTitle : '', enteredAmount : '', enteredDate : '' } );
    // function titleChangeHandler(event){
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle : event.target.value };
    //     });
    // };


    function titleChangeHandler(event){
        setEnteredTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnteredAmount(event.target.value);       
    }
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
        
    }

    function submitHandler(event){
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    }


    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" placeholder="Enter expense title" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" placeholder="Enter expense amount" value={enteredAmount}  onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" value={enteredDate}  onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onClickingCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;