const express = require('express');
// const app = express();
const bodyParser = require('body-parser');
const products = require('./public/js/products-data');
const messages = require('./public/js/messages-data');
const customers = require('./public/js/customer-data');
const app = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const textParser = bodyParser.text();

// Homepage route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/homepage.html');
});

// Featured page
app.get('/featured', (req, res) => {
    res.sendFile(__dirname + '/public/html/featured.html');
});

// Products page
app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/public/html/products.html');
});

// Contact Us page
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/html/contact.html');
});

// Customer List page
app.get('/admin/custlist', (req, res) => {
    res.sendFile(__dirname + '/public/html/custlist.html');
});

// Customer Messages page
app.get('/admin/custmsg', (req, res) => {
    res.sendFile(__dirname + '/public/html/custmsg.html');
});

// ******* PRODUCTS API
// Returns all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Fetches a specific product by ID.
app.get('/api/products/:id', (req, res) => {
    const product = products.find((h) => h.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found.');
    else res.send(product);
});

// Modifies rating
app.put('/api/products/:id/rating', textParser, function (req, res) {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).send('Product not found.');
    }

    if (req.body === 'good') {
        product.rating.good += 1;
    } else if (req.body === 'bad') {
        product.rating.bad += 1;
    } else {
        return res.status(400).send('Invalid rating type.');
    }

    res.send(product);
});

// ****** CONTACT API
// Get all messages
app.get('/api/contact/msg', (req, res) => {
    res.send(messages);
})

// Get message by ID
app.get('/api/contact/msg/:id', (req, res) => {
    const message = messages.find((h) => h.id === parseInt(req.params.id));
    if (!message) return res.status(404).send('Message not found.');
    else res.send(message);
})

// Adds a new customer message and redirects to social media marketing or email marketing page
app.post('/api/contact/msg/new', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    let newMessage = {
        id: messages.length + 1,
        name: req.body.name,
        email: req.body.email,
        num: req.body.num,
        subject: req.body.subject,
        message: req.body.message,
        preferred: req.body.preferred
    };

    let newCustomer = {
        id: customers.length + 1,
        name: req.body.name,
        email: req.body.email,
        num: req.body.num,
        preferred: req.body.preferred
    };

    // Eto default na pupuntahan since di pa kinukuha from user
    if (newMessage.preferred == 'Social Media Marketing') {
        res.sendFile(__dirname + '/public/html/smm.html');
        messages.push(newMessage);
    }

    else if (newMessage.preferred == 'Email Marketing') {
        res.sendFile(__dirname + '/public/html/em.html');
        messages.push(newMessage);
    }

    customers.push(newCustomer);
});

// **** CUSTOMERS API
// Get all customers
app.get('/api/customers/', (req, res) => {
    res.send(customers);
})

// Get customer by ID
app.get('/api/customers/:id', (req, res) => {
    const customer = customers.find((h) => h.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found.');
    else res.send(customer);
})

// Adding a new customer will happen na doon sa contact, so no need api for post here.

module.exports = app;