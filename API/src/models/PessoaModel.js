const { connection } = require(`../config/config_db`);

const modelPessoa = {

    insertPessoa: async (pessoa) => {
        try {
            const conn = await connection();
            const sql = 'INSERT INTO Pessoa(nome,cpf,data_nasc,genero,estado_civil,email,telefone) VALUES (?,?,?,?,?,?,?);';
            const values = [pessoa.nome,pessoa.cpf,pessoa.dataNasc,pessoa.sexo,pessoa.estado_civ,pessoa.email,pessoa.telefone];
            return await conn.query(sql, values);
        } catch (error) {
            throw error;
        }
    },
    validaCpf: async (cpf) => {
        try {
            const conn = await connection(); 
            const sql = "SELECT COUNT(*) AS total FROM pessoa WHERE cpf = ?"; 
            const [rows] = await conn.query(sql, [cpf]); 
            console.log(rows)
            const count = rows[0].total; 
            return count > 0; 
        } catch (error) {
            throw error; 
        }
    }
}

module.exports= modelPessoa;