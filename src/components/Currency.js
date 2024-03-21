import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency ]= useState(currency)
    const changeCurrency = (val)=>{
        setNewCurrency(val)
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })

    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Currency({currency})
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item  onClick={(event) => changeCurrency('$')}>$ Dollar</Dropdown.Item>
                <Dropdown.Item  onClick={(event) => changeCurrency('£')}>£ Pound</Dropdown.Item>
                <Dropdown.Item  onClick={(event) => changeCurrency('€')}>€ Euro</Dropdown.Item>
                <Dropdown.Item  onClick={(event) => changeCurrency('₹')}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default Currency;