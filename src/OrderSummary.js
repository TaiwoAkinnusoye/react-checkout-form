import React from 'react';

const OrderSummary = (props) => {

        
        // Duration Pluralization
        if(props.duration > 1) {
            var duration = props.duration + 'days';
        } else {
            var duration = props.duration + 'day';
        }

        // Inital Total Calculation
        let initialTotal = props.duration * props.price;
        // Discount Calculation
        let discount = Math.floor((initialTotal/ 100) * props.discount);
        // Subtotal (with discount)
        let subTotal = initialTotal - discount;
        // Calculate tax
        let tax = Math.floor((subTotal/100) * props.tax);
        // Total
        let total = subTotal + tax;
        return (
            <div className="OrderSummary">
                <div className="Title">Order Summary</div>
                <table>
                    <tbody>
					<tr>
						<td>{props.price} x {duration}</td>
						<td>{initialTotal} GBP</td>
					</tr>
					<tr>
						<td>Discount</td>
						<td>{discount} GBP</td>
					</tr>
					<tr>
						<td>Subtotal</td>
						<td>{subTotal} GBP</td>
					</tr>
					<tr>
						<td>Tax</td>
						<td>{tax} GBP</td>
					</tr>
                    </tbody>
				</table>
                <div className="Total">
					<div className="TotalLabel">Total</div>
					<div className="Amount">
						{total} <small>GBP</small>
					</div>
				</div>
            </div>
        )
    };
;

export default OrderSummary;