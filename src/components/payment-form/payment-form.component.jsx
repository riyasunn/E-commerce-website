import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser, selectUserName } from '../../store/user/user.selector';

import { CardElement, useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES }from '../button/button.component';

import { PaymentFormContainer, FormContainer, PaymentButton } from './payment-form.styles';


const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const displayName = useSelector(selectUserName);
    const [isProcessingPayment, setIsProcessPayment] = useState(false);


    const paymentHandler = async (e) => {
        e.preventDefault();
        if(!stripe || !elements) {
            return;
        }

        setIsProcessPayment(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: amount * 100 }),
        }).then(response => response.json())

        console.log(response);
        // const clientSecret = response.paymentItent.client_secret //可以destructure as below:

        const {paymentIntent: { client_secret }} = response;
        console.log(client_secret);

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card:elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? displayName : 'Guest',
                },
            }
        });

        setIsProcessPayment(false);

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else if(paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful');
            }
    };

    const CARD_ELEMENT_OPTIONS = {
        style: {
            base: {
              color: "#32325d",
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSmoothing: "antialiased",
              fontSize: "30px",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#fa755a",
              iconColor: "#fa755a",
            },
          },
    }

    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h1>Credit card payment: </h1> 
                    <CardElement options={CARD_ELEMENT_OPTIONS}/>
                
                
                <PaymentButton isLoading={isProcessingPayment} buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
};


export default PaymentForm;