const {Router} = require('express');
const {getNotes, getNote, createNote, updateNote, deleteNote} = require('../controllers/notes.controllers');

const router = Router();

router.route('/')
    .get(getNotes)
    .post(createNote)

router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote)

module.exports = router;