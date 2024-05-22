import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PaymentPage = () => {
    const location = useLocation();
    const [name, setName] = useState(location.state?.name || '');
    const [amount, setAmount] = useState(location.state?.amount || '');

    useEffect(() => {
        if (location.state) {
            setName(location.state.name);
            setAmount(location.state.amount);
        }
    }, [location.state]);

    const handlePayment = async () => {
        try {
            const response = await axios.post('http://localhost:5000/create-checkout-session', { name, amount });
            window.location.href = response.data.url; // Redirect to Stripe Checkout
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <button onClick={handlePayment}>Pay with Stripe</button>
        </div>
    );
};

export default PaymentPage;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { useLocation } from 'react-router-dom';

// const stripePromise = loadStripe('pk_test_51PJ7EcSH7Up8Zpzcigep7ovAHa0rqK1cEHu1huqIOkVMfrnPGehOe7kSkUYcFZodpy4DbkRuZg93zlrjRZNG0Dd700JhQuGHB6'); // Replace with your Stripe publishable key

// const CheckoutForm = ({ name, amount }) => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { data: { clientSecret } } = await axios.post('http://localhost:5000/payment', { name, amount });

//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
//             }
//         });

//         if (payload.error) {
//             console.error('Payment failed:', payload.error);
//         } else {
//             console.log('Payment succeeded:', payload.paymentIntent.id);
//             await axios.post('http://localhost:5000/save-transaction', {
//                 name,
//                 amount,
//                 transactionId: payload.paymentIntent.id
//             });
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button type="submit" disabled={!stripe}>Pay</button>
//         </form>
//     );
// };

// const PaymentPage = () => {
//     const location = useLocation();
//     const [name, setName] = useState(location.state?.name || '');
//     const [amount, setAmount] = useState(location.state?.amount || '');

//     useEffect(() => {
//         setName(location.state?.name || '');
//         setAmount(location.state?.amount || '');
//     }, [location.state]);

//     return (
//         <div>
//             <h1>Payment Page</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//             />
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Amount"
//             />
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm name={name} amount={amount} />
//             </Elements>
//         </div>
//     );
// };

// export default PaymentPage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('https://buy.stripe.com/test_5kA02ma692Ta9skcMM'); // Replace with your Stripe publishable key

// const CheckoutForm = ({ name, amount }) => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         const { data: clientSecret } = await axios.post('http://localhost:5000/payment', { name, amount });
//         const payload = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement)
//             }
//         });

//         if (payload.error) {
//             console.error('Payment failed:', payload.error);
//         } else {
//             console.log('Payment succeeded:', payload.paymentIntent.id);
//             await axios.post('http://localhost:5000/save-transaction', {
//                 name,
//                 amount,
//                 transactionId: payload.paymentIntent.id
//             });
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <CardElement />
//             <button type="submit" disabled={!stripe}>Pay</button>
//         </form>
//     );
// };

// const PaymentPage = ({ location }) => {
//     const [name, setName] = useState(location.state.name || '');
//     const [amount, setAmount] = useState(location.state.amount || '');

//     useEffect(() => {
//         setName(location.state.name);
//         setAmount(location.state.amount);
//     }, [location.state]);

//     return (
//         <div>
//             <h1>Payment Page</h1>
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//             />
//             <input
//                 type="number"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//                 placeholder="Amount"
//             />
//             <Elements stripe={stripePromise}>
//                 <CheckoutForm name={name} amount={amount} />
//             </Elements>
//         </div>
//     );
// };

// export default PaymentPage;
