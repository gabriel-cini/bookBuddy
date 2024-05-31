const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Ajouter un livre
router.post('/addBook', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).send(newBook);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Récupérer tous les livres
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).send(books);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Récupérer un livre spécifique
router.get('/book/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Récupérer des livres filtrés
router.get('/book/filter/:filtre', async (req, res) => {
    try {
        const books = await Book.find({ genre: req.params.filtre });
        res.status(200).send(books);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Modifier l'état d'un livre
router.put('/book/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Modifier la page en cours de lecture
router.put('/book/status/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { currentPage: req.body.currentPage }, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Ajouter un livre en favori
router.post('/book/favorite/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { isFavorite: true }, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// Supprimer un livre des favoris
router.delete('/book/favorite/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, { isFavorite: false }, { new: true });
        if (!book) return res.status(404).send('Book not found');
        res.status(200).send(book);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;