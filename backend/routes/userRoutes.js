const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY); // Use environment variable for the secret key

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB setup
mongoose.connect('mongodb://localhost:27017/paymentDB', { useNewUrlParser: true, useUnifiedTopology: true });
const transactionSchema = new mongoose.Schema({
    name: String,
    amount: Number,
    transactionId: String
});
const Transaction = mongoose.model('Transaction', transactionSchema);

// Create Checkout Session Route
app.post('/create-checkout-session', async (req, res) => {
    const { name, amount } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: name,
                        },
                        unit_amount: amount * 100, // amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: 'http://localhost:3000/success', // Redirect URL on success
            cancel_url: 'http://localhost:3000/cancel', // Redirect URL on cancel
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save transaction to DB
app.post('/save-transaction', async (req, res) => {
    const { name, amount, transactionId } = req.body;
    const transaction = new Transaction({ name, amount, transactionId });
    await transaction.save();
    res.send('Transaction saved');
});

// Get all transactions
app.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
