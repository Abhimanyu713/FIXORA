This is the api for calling session , payment transaction and offer/sale 

# calling session 


# payment transaction

1: register the payment transaction
POST =>  http://192.168.1.3:9090/paymentTransaction/createPayment
 example {
  "transaction_id": "123e4567-e89b-12d3-a456-426614174000",
  "user_id": "987e6543-a21b-43d2-c123-456789abcdef",
  "subscription_plan": "Professional Plan",
  "amount": 259.99, // Numeric value
  "payment_method": "Credit Card",
  "status": "Completed",
  "transaction_date": "2025-01-17T10:30:00Z",
  "payment_gateway_id": "razorpay_987654321",
  "currency": "USD",
  "description": "Monthly subscription for the Professional Plan",
  "receipt_url": "https://example.com/receipt/123e4567",
  "refunded": false,
  "refund_id": null
}

2: get all the payment transaction 
Get => http://192.168.1.3:9090/paymentTransaction/



# offer / sales

