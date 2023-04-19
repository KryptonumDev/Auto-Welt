require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.count,
        currency: "pln",
        payment_method_types: [req.body.method],
        metadata: { order_id: req.body.id },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
        id: paymentIntent.id,
    });
};