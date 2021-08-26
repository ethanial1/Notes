const noteCtrl = {};

// GET
// regresa muchas notas
noteCtrl.getNotes = (req, res) => res.json({msg: "Ok"});

// regresa una nota
noteCtrl.getNote = (req, res) => res.json({msg: "Ok"});

// POST
noteCtrl.createNote = (req, res) => res.json({msg: "Ok"});

// PUT
noteCtrl.updateNote = (req, res) => res.json({msg: "Ok"});

// DELETE
noteCtrl.deleteNote = (req, res) => res.json({msg: "Ok"});

module.exports = noteCtrl;