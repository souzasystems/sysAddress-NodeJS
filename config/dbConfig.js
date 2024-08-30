const mysql = require('mysql');

// Configuração da conexão com o banco de dados
const connectionMySQL = function() {
    console.log('Conexão com o banco de dados realizada com sucesso.');
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'TESTE'
    });
}

const disconnectMySQL = function(connectionDB) {
    connectionDB.end(function(error) {
        if (error) {
            console.error('Houve um erro ao realizar a desconexão com o banco de dados. Motivo: ' + error);
        }
        else {
            console.log('Desconexão com o banco de dados realizada com sucesso.');
        }
    });
}

//module.exports = connectionMySQL;

module.exports = function() {
    console.log('O autoload carregou o módulo de conexão e desconexão com o banco de dados MySQL.');
    return {
        dbConnection: connectionMySQL,
        dbDisconnection: disconnectMySQL
    }
}
