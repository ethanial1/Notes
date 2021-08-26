const NoteModel = require('../models/Note');

const noteCtrl = {};

// GET
// regresa muchas notas
noteCtrl.getNotes = async (req, res) => {
    const notes = await NoteModel.find(); // [{},{},{}]
    res.json({msg: notes});
}

// regresa una nota
noteCtrl.getNote = async (req, res) => {
    const nota = await NoteModel.findById(req.params.id);

    res.json(nota);
}

// POST
noteCtrl.createNote = async (req, res) => {
    const {title, descrip, author, date} = req.body;
    const newNote = new NoteModel({
        title: title,
        descrip: descrip,
        author: author,
        date: date
    });

    await newNote.save();

    res.json({msg: "Nota guardada"});
}

// PUT
noteCtrl.updateNote = async (req, res) => {
    await NoteModel.findByIdAndUpdate(req.params.id, req.body);
    //await NoteModel.findOneAndUpdate()
    res.json({msg: "Nota actualizada"});
}

// DELETE
noteCtrl.deleteNote = async (req, res) => {
    await NoteModel.findByIdAndDelete(req.params.id);
    res.json({msg: "Nota eliminada"});
}

module.exports = noteCtrl;