import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({items}) => {
  const [selectedYear, setSelectedYear] = React.useState('2022');
  const [filteredItems, setFilteredItems] = React.useState(items);
  
  const selectHandler = (year) => {
    setSelectedYear(year);
    setFilteredItems(items.filter(item => item.date.getFullYear().toString() === year));
  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter selectHandler={selectHandler} selectedYear={selectedYear}/>
      {filteredItems.map(item => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
