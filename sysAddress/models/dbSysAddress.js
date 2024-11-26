function dbSysAddress(connectionDB) {
  this.dataBaseConnection = connectionDB;
}

dbSysAddress.prototype.getUsuarioByNome = function (userName, password, callBack) {
  const query = 'CALL sp_CONSULTA_USUARIO(?, ?)';
  this.dataBaseConnection.query(query, [userName, password], callBack);
};

dbSysAddress.prototype.getTiposEndereco = function (callBack) {
  const query = 'CALL sp_CONSULTA_TIPOS_ENDERECO';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getTipoEndereco = function (idTipoEndereco, callBack) {
  const query = 'CALL sp_CONSULTA_TIPO_ENDERECO(?)';
  this.dataBaseConnection.query(query, [idTipoEndereco], callBack);
}

dbSysAddress.prototype.insereTipoEndereco = function (descricaoTipoEndereco, logIdUsuario, callBack) {
  let query = `CALL sp_INSERE_TIPO_ENDERECO(?, ?, @p_ID_TIPO_ENDERECO)`;

  this.dataBaseConnection.query(query, [descricaoTipoEndereco, logIdUsuario], (error) => {
    if (error) {
      return callBack(error);
    }

    query = 'SELECT @p_ID_TIPO_ENDERECO AS idTipoEndereco';

    this.dataBaseConnection.query(query, (error, result) => {
      if (error) {
        return callBack(error);
      }

      if (result[0].idTipoEndereco != null && result[0].idTipoEndereco !== undefined) {
        const idTipoEndereco = result[0].idTipoEndereco;
        callBack(null, idTipoEndereco);
      }
      else {
        callBack(new Error('Houve um erro ao obter o código do tipo de endereço gerado.'));
      }
    });
  });
};

dbSysAddress.prototype.alteraTipoEndereco = function (idTipoEndereco, descricaoTipoEndereco, logIdUsuario, callBack) {
  const query = 'CALL sp_ALTERA_TIPO_ENDERECO(?, ?, ?)';
  this.dataBaseConnection.query(query, [idTipoEndereco, descricaoTipoEndereco, logIdUsuario], callBack);
}

dbSysAddress.prototype.excluiTipoEndereco = function (idTipoEndereco, idLogUsuario, motivoExclusao, callBack) {
  const query = 'CALL sp_EXCLUI_TIPO_ENDERECO(?, ?, ?)';
  this.dataBaseConnection.query(query, [idTipoEndereco, idLogUsuario, motivoExclusao], callBack);
}

dbSysAddress.prototype.getTiposTelefone = function (callBack) {
  const query = 'CALL sp_CONSULTA_TIPOS_TELEFONE';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getEstadosCivis = function (callBack) {
  const query = 'CALL sp_CONSULTA_ESTADOS_CIVIS';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getEstadoCivil = function (idEstadoCivil, callBack) {
  const query = 'CALL sp_CONSULTA_ESTADO_CIVIL(?)';
  this.dataBaseConnection.query(query, [idEstadoCivil], callBack);
}

dbSysAddress.prototype.insereEstadoCivil = function (descricaoEstadoCivil, logIdUsuario, callBack) {
  let query = `CALL sp_INSERE_ESTADO_CIVIL(?, ?, @p_ID_ESTADO_CIVIL)`;

  this.dataBaseConnection.query(query, [descricaoEstadoCivil, logIdUsuario], (error) => {
    if (error) {
      return callBack(error);
    }

    query = 'SELECT @p_ID_ESTADO_CIVIL AS idEstadoCivil';

    this.dataBaseConnection.query(query, (error, result) => {
      if (error) {
        return callBack(error);
      }

      if (result[0].idEstadoCivil != null && result[0].idEstadoCivil !== undefined) {
        const idEstadoCivil = result[0].idEstadoCivil;
        callBack(null, idEstadoCivil);
      }
      else {
        callBack(new Error('Houve um erro ao obter o código do estado civil gerado.'));
      }
    });
  });
};

dbSysAddress.prototype.alteraEstadoCivil = function (idEstadoCivil, descricaoEstadoCivil, logIdUsuario, callBack) {
  const query = 'CALL sp_ALTERA_ESTADO_CIVIL(?, ?, ?)';
  this.dataBaseConnection.query(query, [idEstadoCivil, descricaoEstadoCivil, logIdUsuario], callBack);
}

dbSysAddress.prototype.excluiEstadoCivil = function (idEstadoCivil, idLogUsuario, motivoExclusao, callBack) {
  const query = 'CALL sp_EXCLUI_ESTADO_CIVIL(?, ?, ?)';
  this.dataBaseConnection.query(query, [idEstadoCivil, idLogUsuario, motivoExclusao], callBack);
}

dbSysAddress.prototype.getLogradouros = function (callBack) {
  const query = 'CALL sp_CONSULTA_LOGRADOUROS';
  this.dataBaseConnection.query(query, callBack);
}

dbSysAddress.prototype.getPaises = function (nomePais, paisInativo, callBack) {
  const query = 'CALL sp_CONSULTA_PAISES(?, ?)';
  this.dataBaseConnection.query(query, [nomePais + '%', paisInativo], callBack);
}

dbSysAddress.prototype.getEstados = function (nomeEstado, estadoInativo, callBack) {
  const query = 'CALL sp_CONSULTA_ESTADOS(?, ?)';
  this.dataBaseConnection.query(query, [nomeEstado + '%', estadoInativo], callBack);
}

dbSysAddress.prototype.getCidades = function (nomeCidade, cidadeInativa, callBack) {
  const query = 'CALL sp_CONSULTA_CIDADES(?, ?)';
  this.dataBaseConnection.query(query, [nomeCidade + '%', cidadeInativa], callBack);
}

dbSysAddress.prototype.getBairros = function (nomeBairro, bairroInativo, callBack) {
  const query = 'CALL sp_CONSULTA_BAIRROS(?, ?)';
  this.dataBaseConnection.query(query, [nomeBairro + '%', bairroInativo], callBack);
}

module.exports = function () {
  return dbSysAddress;
}