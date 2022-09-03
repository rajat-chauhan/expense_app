import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList(props) {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback"> Sorry! No Expense data found. </h2>;
    }

    return (
        <ul className="expenses-list">
            {props.items.map(item => <ExpenseItem key={item.id} date={item.date} title={item.title} amount={item.amount} />)}
        </ul>
    )
}

export default ExpenseList;