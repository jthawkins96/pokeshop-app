import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.scss';

const StripeCheckoutButton = props => {
    const priceForStripe = props.price * 100;
    const accessKey = 'pk_test_LsfxTVXdI5E6n4rFlBzPHmA000EDLMwsLP';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Checkout'
            name='Poke Shop'
            billingAddress
            shippingAddress
            description={`Total: $${props.price}`}
            amount={priceForStripe}
            token={onToken}
            image='https://res.cloudinary.com/jthawkins96/image/upload/v1576432966/pokeball_cdns3m.png'
            stripeKey={accessKey}
        />
    )
}

export default StripeCheckoutButton;