import { P24 } from "@ingameltd/node-przelewy24";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const p24 = new P24(
  Number(process.env.P24_MERCHANT_ID),
  Number(process.env.P24_POS_ID),
  process.env.P24_REST_API_KEY,
  process.env.P24_CRC,
  {
    sandbox: false
  }
)

const api = new WooCommerceRestApi({
  url: `${process.env.GATSBY_WORDPRESS_URL}/`,
  consumerKey: process.env.GATSBY_WOO_KEY,
  consumerSecret: process.env.GATSBY_WOO_SECRET,
  version: 'wc/v3'
});

export default async function handler(req, res) {
  try {
    const { sessionId, amount, currency, orderId } = req.body

    const id = req.query.id

    const response = await p24.verifyTransaction({
      amount: amount,
      currency: currency,
      orderId: orderId,
      sessionId: sessionId,
    })
    console.log({ 'verify': response })

    api.put(`orders/${id}`, {
      status: "processing",
      transaction_id: req.query.id
    })
      .then((data) => {
        console.log('its okey')
        console.log(data)
        return res.status(200).send('Dziękujemy za złożenie zamówienia, twój numer zamówienia to: ' + req.query.id + ', twój numer płatności to: ' + req.query.id);
      }).catch((err) => {
        console.log('error at seting order')
        console.log(err)
        return res.status(500).send('Błąd podczas aktualizacji zamówienia, napisz do nas, twój numer zamówienia to: ' + req.query.id + ', twój numer płatności to: ' + req.query.id);
      })

  } catch (err) {
    console.log('error at verify transaction')
    console.log(err)
    return res.status(500).json({ res: err })
  }
}