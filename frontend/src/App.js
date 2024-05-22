import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentPage from './paymentsPage.js';
import TransactionsPage from './transactionPage.js';
import Main from './pages/mainpage.js'; // Ensure correct import path

function App() {
    return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/transactions" element={<TransactionsPage />} />
          </Routes>
      </Router>
    );
}

export default App;
