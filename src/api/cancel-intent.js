import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const stripe = require("stripe")(process.env.GATSBY_STRIPE_SECRET_KEY);
const api = new WooCommerceRestApi({
    url: `${process.env.GATSBY_WORDPRESS_URL}/`,
    consumerKey: process.env.GATSBY_WOO_KEY,
    consumerSecret: process.env.GATSBY_WOO_SECRET,
    version: 'wc/v3'
});

export default async function handler(req, res) {
  api.put(`orders/${req.body.orderNumber}`, {
      status: 'cancelled'
  })
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.cancel(req.body.intent);

  res.send({
    paymentIntent: paymentIntent
  });
};