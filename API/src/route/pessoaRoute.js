const express = require("express");
const router = express.Router();
const PessoaController  = require("../controllers/PessoaController");
router.post('/pessoa',PessoaController.criaPessoa)
module.exports = router;