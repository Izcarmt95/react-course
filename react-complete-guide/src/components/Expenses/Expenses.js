import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import  {useState} from 'react';
const Expenses = (props) => {
    const data = props.expenses
    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = data.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <div>
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            { filteredExpenses.length === 0 ?
            <p>No expenses found.</p> :
            filteredExpenses.map((expense) => (
                        <ExpenseItem 
                            key={expense.id}
                            title={expense.title}
                            price={expense.amount}
                            date={expense.date}
                        />
                    )
                )
            }
        </Card>
        </div>
    );
    
}

export default Expenses;