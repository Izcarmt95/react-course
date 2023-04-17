import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./../UI/Card";
const Expenses = (props) => {
    const data = props.expenses
  
    return (

        <Card className="expenses">
            {
                data.map((expense) => {
                        return (
                            <ExpenseItem 
                                key={expense.id}
                                title={expense.title}
                                price={expense.amount}
                                date={expense.date}
                            />
                        );
                    }
                )
            }
        </Card>
    );
    
}

export default Expenses;