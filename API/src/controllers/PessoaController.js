const Pessoa = require('../models/Pessoa');
const p = require('../models/PessoaModel');

const criaPessoa = async (req, res) => {
    const { nome, cpf, dataNasc, email, estado_civ, sexo, telefone } = req.body;
    try {
        const cpfValido = await p.validaCpf(cpf);
        if (cpfValido) {
            return res.json('CPF já cadastrado.' );
            console.log("cpf já cadastrado");
        
        }
        const pessoa = new Pessoa(nome, dataNasc, cpf, sexo, estado_civ, email, telefone);
        await p.insertPessoa(pessoa);
        res.json({ message: 'Pessoa criada com sucesso'});
    } catch (error) {
        console.error('Erro ao criar pessoa:', error);
        res.status(500).json({ error: 'Ocorreu um erro ao criar a pessoa.' });
    }
};

module.exports = { criaPessoa };



