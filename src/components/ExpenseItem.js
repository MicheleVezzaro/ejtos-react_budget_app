import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { IoAddCircle,  IoRemoveCircle} from "react-icons/io5";
import { AppContext } from '../context/AppContext';
const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);
    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td>
                <IoAddCircle size='1.5em' color='green' onClick={event => increaseAllocation(props.name)}></IoAddCircle>
            </td>
            <td>
                <IoRemoveCircle size='1.5em' color='red' onClick={event => decreaseAllocation(props.name)}></IoRemoveCircle>
            </td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};
export default ExpenseItem;
