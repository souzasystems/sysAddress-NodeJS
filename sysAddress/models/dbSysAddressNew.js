/*
class DbSysAddress {
    constructor(connectionDB) {
        this.dataBaseConnection = connectionDB;
    }

    getUsuarioByNome(userName, password, callBack) {
        const query = 'CALL sp_CONSULTA_USUARIO(?, ?)';
        this.dataBaseConnection.query(query, [userName, password], callBack);
    }

    getTiposEndereco(callBack) {
        const query = 'CALL sp_CONSULTA_TIPOS_ENDERECO';
        this.dataBaseConnection.query(query, callBack);
    }

    getTiposTelefone(callBack) {
        const query = 'CALL sp_CONSULTA_TIPOS_TELEFONE';
        this.dataBaseConnection.query(query, callBack);
    }
}

module.exports = DbSysAddress;
*/