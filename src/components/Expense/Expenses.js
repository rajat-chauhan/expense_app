import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');
    function filterChangeHandler(selectedYear){
        setFilteredYear(selectedYear);
    };

    return (
            <div className="expenses">
                <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler} />
                {props.items.map(item =>
                    <ExpenseItem
                        key={item.id}
                        date={item.date}
                        title={item.title}
                        amount={item.amount}
                    />
                )}
            </div>
    )
}

export default Expenses;