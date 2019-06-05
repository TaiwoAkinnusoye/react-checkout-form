import React from 'react';
import BasicInput from './BasicInput';
import ExpiryDate from './ExpiryDate';
import CheckOutButton from './CheckOutButton.js';

const PaymentForm = (props) => {
    return (
        <div className="PaymentForm">
            <form onSubmit={props.onSubmit}>
                <div className="Title">Payment Information</div>
                <BasicInput name="name" label="Name on Credit Card" type="text" placeholder="John Smith" />
                <BasicInput name="card" label="Credit Card Number" type="number" placeholder="0000 0000 0000 0000" />
                <ExpiryDate />
                <CheckOutButton />
            </form>
        </div>
    )
};

export default PaymentForm;