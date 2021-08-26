const {Router} = require('express');

const router = Router();

router.route('/')
    .get((req, res) => res.send('Notas'))
    .post()



module.exports = router;