const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const api = new WooCommerceRestApi({
    url: `${process.env.GATSBY_WORDPRESS_URL}/`,
    consumerKey: process.env.GATSBY_WOO_KEY,
    consumerSecret: process.env.GATSBY_WOO_SECRET,
    version: 'wc/v3'
});

export default async function handler(req, res) {
    let status = req.query.redirect_status === 'succeeded' ? 'processing' : 'cancelled'
    api.put(`orders/${req.query.id}`, {
        status: status,
        transaction_id: req.query.payment_intent
    }).catch(err => {
        res.status(500).send('Błąd podczas aktualizacji zamówienia, napisz do nas, twój numer zamówienia to: ' + req.query.id + ', twój numer płatności to: ' + req.query.payment_intent);
    }).then(data => {
        res.redirect(`/podziekowanie?status=${req.query.redirect_status}&order=${req.query.id}`)
    })

};