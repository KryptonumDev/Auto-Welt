const stripe = require("stripe")('sk_test_51MhDaNI9MWE3PvcYwmreLNO7Ge1Jda1RJFTXmKFjvRod9yqpTvGJ0QBvXiaUwoVwoQb35WErvEoewnyzIwKEOLX9003ePuMQ8E');

export default async function handler(req, res) {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.count,
        currency: "pln",
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
};