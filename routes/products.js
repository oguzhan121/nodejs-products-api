const express = require('express');
const Product = require("../modules/Product");
const router = express.Router();


router.post('/', (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    });
    product.save();
    res.json(product);
});


router.get("/", (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products);
        })
        .catch((err) => {
            res.json(err);
        })
});

router.get("/:id", (req, res) => {
    Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json(err)
        })
});

router.put("/:id", (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
    })
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.json(err);
    })
});

router.delete("/:id",(req,res) => {
    Product.findByIdAndDelete(req.params.id)
    .then((product) => {
        res.json(product);
    })
    .catch((err) => {
        res.json(err);
    })
})



module.exports = router;

