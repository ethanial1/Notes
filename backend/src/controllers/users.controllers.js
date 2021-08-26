
const User = require('../models/User');

const userCtrl = {}

userCtrl.getUsers = async (req, res) => {
    const lista = await User.find();
    res.json({lista});
}

userCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json({msg: "Usuario guardado"});
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);

    res.json({msg: "Usuario eliminado"});
}


module.exports = userCtrl;