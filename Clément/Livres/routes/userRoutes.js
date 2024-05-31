const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/addUser', async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
});

router.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.status(200).send(user);
});

router.put('/user/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, { password: req.body.password }, { new: true });
    res.status(200).send(user);
});

router.post('/connexion', async (req, res) => {
    const user = await User.findOne({ username: req.body.username, password: req.body.password });
    if (user) {
        res.status(200).send(user);
    } else {
        res.status(400).send({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
});

module.exports = router;