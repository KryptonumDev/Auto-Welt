import {
  P24,
  Currency,
  Country,
  Language,
  Encoding,
} from "@ingameltd/node-przelewy24";

const p24 = new P24(
  Number(process.env.P24_MERCHANT_ID),
  Number(process.env.P24_POS_ID),
  process.env.P24_REST_API_KEY,
  process.env.P24_CRC,
  {
    sandbox: false
  }
);

export default async function handler(req, res) {
  try {
    const { amount, email, urlReturn, urlStatus, description, key, id } = req.body

    const order = {
      sessionId: key,
      amount: Number(amount),
      currency: Currency.PLN,
      description: description,
      email: email,
      country: Country.Poland,
      language: Language.PL,
      urlReturn: urlReturn,
      urlStatus: urlStatus,
      timeLimit: 60,
      encoding: Encoding.UTF8,
    }

    const response = await p24.createTransaction(order)
    // TODO: add link to local storage and show it on /blad-platnosci page if transaction is not completed
    return res.json({ link: response.link })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}