const express = require("express")
const cors = require("cors")
const stripe = require("stripe")("pk_test_51MFeFBLjMxsRcJtMH6eI9oWOoBP95zrWtoY0jSkgUrPzyfcQvPX8ayPL5ro31SdQ8Rcd3pc7A4mBmVGJ9vKN5BLa00UeXZsjoi")
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.send("Welcome To SelloBuyo Shpe ");
                                                                
});
app.post("/checkout", async (req, res) => {

    let error;
    let status;
    try {
        const { product, token } = req.body;
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });
        const key = uuidv4();
        const id_key = Math.random();
        const charge = await stripe.charges.create({
            amount: product.price * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchased the ${product.name}`,
            shipping: {
                name:token.card.name,
                address:{
                    line1: token.card.address_line1,
                    line2: token.card.address.line2,
                    city: token.card.address_city,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip
                }
               
            }
        }, {
            id_key: key

        });
        status = "success";


    } catch (error) {
        console.log(error);
        status = "error";

    }
    res.json({ status });
});
app.listen(5000, () => {
    console.log("Your App is Running At the 8080 portals ")
})