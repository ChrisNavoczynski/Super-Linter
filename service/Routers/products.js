const express = require('express');
const productsRouter = express.Router();

const products = [
    { id: "1", name: "a hat", price: 20, available: true},
    { id: "2", name: "a bat", price: 2, available: false},
    { id: "3", name: "a cat", price: 200, available: true},
    { id: "4", name: "a rat", price: 100, available: true}
 ]

productsRouter.route('/')
    .get((req, res) => {
        res.json(products);
    })
    .post((req, res) => {
        console.log(req.body);
        res.sendStatus(204); //successful with no return
    });

productsRouter.route("/:id")
    .get((req, res) => {
        const matchingProducts = products.filter((p) => {
            return req.params['id'] === p.id;
    })
        if (matchingProducts.length === 1) {
            res.send(matchingProducts[0]);    
        } else {
            res.sendStatus(400);
        }
});
module.exports = productsRouter;