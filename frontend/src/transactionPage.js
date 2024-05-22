import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TransactionsPage = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const { data } = await axios.get('http://localhost:5000/transactions');
            setTransactions(data);
        };

        fetchTransactions();
    }, []);

    return (
        <div>
            <h1>Transactions Page</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {transactions.map((transaction) => (
                    <div key={transaction._id} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
                        <h2>{transaction.name}</h2>
                        <p>${transaction.amount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionsPage;
