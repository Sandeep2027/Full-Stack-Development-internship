import React from 'react';

function PaymentSection() {
  return (
    <div className="payment-section">
      <h2>Payment</h2>
      <input type="text" placeholder="Coupon Code" />
      <button>Apply</button>
      <button>Pay with PayPal</button>
      <button>Pay with Stripe</button>
    </div>
  );
}

export default PaymentSection;
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PaymentSection() {
  return (
    <div className="payment-section">
      <h2>Payment</h2>
      <input type="text" placeholder="Coupon Code" />
      <button>Apply</button>
      <PayPalScriptProvider options={{ "client-id": "YOUR_PAYPAL_CLIENT_ID" }}>
        <PayPalButtons style={{ layout: "vertical" }} />
      </PayPalScriptProvider>
    </div>
  );
}

