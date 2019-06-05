import React from 'react';
import OrderSummary from './OrderSummary';
import PaymentForm from './PaymentForm';

const Checkout = (props) => {
    return (
        <div className="CheckOut">
            <OrderSummary discount={props.discount} tax={props.tax} price={props.price} duration={props.duration} />
            <PaymentForm onSubmit={props.onSubmit} />
        </div>
    )
}

export default Checkout;