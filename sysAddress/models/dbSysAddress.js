function dbSysAddress (connectionDB) {
  this.dataBaseConnection = connectionDB;
}

dbSysAddress.prototype.getUsuarioByNome = function(userName, password, callBack) {
  const query = 'CALL sp_CONSULTA_USUARIO(?, ?)';
  this.dataBaseConnection.query(query, [userName, password], callBack);
};

dbSysAddress.prototype.getTiposEndereco = function(callBack) {
    const query = 'CALL sp_CONSULTA_TIPOS_ENDERECO';
    this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getTiposTelefone = function(callBack) {
  const query = 'CALL sp_CONSULTA_TIPOS_TELEFONE';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getEstadosCivis = function(callBack) {
  const query = 'CALL sp_CONSULTA_ESTADOS_CIVIS';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getLogradouros = function(callBack) {
  const query = 'CALL sp_CONSULTA_LOGRADOUROS';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getPaises = function(nomePais, paisInativo, callBack) {
  const query = 'CALL sp_CONSULTA_PAISES(?, ?)';
  this.dataBaseConnection.query(query, [nomePais + '%', paisInativo], callBack);
}

dbSysAddress.prototype.getEstados = function(nomeEstado, estadoInativo, callBack) {
  const query = 'CALL sp_CONSULTA_ESTADOS(?, ?)';
  this.dataBaseConnection.query(query, [nomeEstado + '%', estadoInativo], callBack);
}

dbSysAddress.prototype.getCidades = function(nomeCidade, cidadeInativa, callBack) {
  const query = 'CALL sp_CONSULTA_CIDADES(?, ?)';
  this.dataBaseConnection.query(query, [nomeCidade + '%', cidadeInativa], callBack);
}

dbSysAddress.prototype.getBairros = function(nomeBairro, bairroInativo, callBack) {
  const query = 'CALL sp_CONSULTA_BAIRROS(?, ?)';
  this.dataBaseConnection.query(query, [nomeBairro + '%', bairroInativo], callBack);
}

module.exports = function() {
  return dbSysAddress;
}
