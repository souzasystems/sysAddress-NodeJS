function abreModalInsercaoEstadoCivil(application, request, response) {
  let dadosEstadoCivil = {
      estadoCivil: null,
      opcaoSel: 'I'
  };

  response.render('cadastros/viewCadastroEstadosCivis', { dadosEstadoCivil: dadosEstadoCivil });
}

function abreModalConsultaEstadoCivil(application, request, response) {
  const estadoCivil = JSON.parse(decodeURIComponent(request.query.estadoCivil));
  const opcaoSel    = request.query.opcaoSel;
  /*
    const estadoCivil = JSON.parse(decodeURIComponent(request.query.estadoCivil));
    const opcaoSel = request.query.opcaoSel;  
  */
  const dadosEstadoCivil = {
      estadoCivil: estadoCivil,
      opcaoSel: opcaoSel
  };

  response.render('cadastros/viewCadastroEstadosCivis', { dadosEstadoCivil: dadosEstadoCivil });
}

function realizaConsultaEstadoCivil(application, request, response) {  
  const idEstadoCivil    = request.query.idEstadoCivil;
  const opcaoSelecionada = request.query.opcaoSel;
  const connectionDB     = application.config.dbConfig.dbConnection();
  const dbSysAddress     = new application.sysAddress.models.dbSysAddress(connectionDB);

  dbSysAddress.getEstadoCivil(idEstadoCivil, function (error, result) {
      if (error) {
          application.config.dbConfig.dbDisconnection(connectionDB);
          return response.status(500).json({ message: 'Houve um erro ao consultar o registro. Motivo: ' + error });
      }

      let dadosEstadoCivil = {
          estadoCivil: result[0],
          opcaoSel: opcaoSelecionada
      };

      response.status(200).json(dadosEstadoCivil);
      application.config.dbConfig.dbDisconnection(connectionDB);
  });
}

function realizaInsercaoEstadoCivil(application, request, response) {
  const descricaoEstadoCivil = request.body.descricaoEstadoCivil;
  const logIdUsuario         = request.body.logIdUsuario;
  const connectionDB         = application.config.dbConfig.dbConnection();
  const dbSysAddress         = new application.sysAddress.models.dbSysAddress(connectionDB);

  application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
      if (error) {
          application.config.dbConfig.dbDisconnection(connectionDB);
          return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
      }

      dbSysAddress.insereEstadoCivil(descricaoEstadoCivil, logIdUsuario, function (error, idEstadoCivil) {
          if (error) {
              application.config.dbConfig.dbRollBackTransaction(connectionDB, function (rollbackError) {
                  if (rollbackError) {
                      console.log('Houve um erro ao realizar o rollback da transação. Motivo: ' + rollbackError);
                  }

                  application.config.dbConfig.dbDisconnection(connectionDB);
                  return response.status(500).json({ message: 'Houve um erro ao alterar o registro. Motivo: ' + error });
              });

              return;
          }

          let dadosEstadoCivil = {
              message: 'O registro foi alterado com sucesso!',
              EstadoCivil: idEstadoCivil,
              opcaoSel: 'A'
          };

          application.config.dbConfig.dbCommitTransaction(connectionDB, function (commitError) {
              if (commitError) {
                  application.config.dbConfig.dbRollBackTransaction(connectionDB, function (rollbackError) {
                      if (rollbackError) {
                          console.log('Houve um erro ao realizar o rollback da transação. Motivo: ' + rollbackError);
                      }

                      application.config.dbConfig.dbDisconnection(connectionDB);
                      return response.status(500).json({ message: 'Houve um erro ao alterar o registro. Motivo: ' + error });
                  });

                  return;
              }

              response.status(200).json(dadosEstadoCivil);
              application.config.dbConfig.dbDisconnection(connectionDB);
          });
      });
  });
}

function realizaAlteracaoEstadoCivil(application, request, response) {
  const idEstadoCivil        = request.body.idEstadoCivil;
  const descricaoEstadoCivil = request.body.descricaoEstadoCivil;
  const logIdUsuario         = request.body.logIdUsuario;
  const connectionDB         = application.config.dbConfig.dbConnection();
  const dbSysAddress         = new application.sysAddress.models.dbSysAddress(connectionDB);

  application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
      if (error) {
          application.config.dbConfig.dbDisconnection(connectionDB);
          return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
      }

      dbSysAddress.alteraEstadoCivil(idEstadoCivil, descricaoEstadoCivil, logIdUsuario, function (error, idEstadoCivil) {
          if (error) {
              application.config.dbConfig.dbRollBackTransaction(connectionDB, function (rollbackError) {
                  if (rollbackError) {
                      console.log('Houve um erro ao realizar o rollback da transação. Motivo: ' + rollbackError);
                  }

                  application.config.dbConfig.dbDisconnection(connectionDB);
                  return response.status(500).json({ message: 'Houve um erro ao alterar o registro. Motivo: ' + error });
              });

              return;
          }

          let dadosEstadoCivil = {
              message: 'O registro foi alterado com sucesso!',
              EstadoCivil: idEstadoCivil,
              opcaoSel: 'A'
          };

          application.config.dbConfig.dbCommitTransaction(connectionDB, function (commitError) {
              if (commitError) {
                  application.config.dbConfig.dbRollBackTransaction(connectionDB, function (rollbackError) {
                      if (rollbackError) {
                          console.log('Houve um erro ao realizar o rollback da transação. Motivo: ' + rollbackError);
                      }

                      application.config.dbConfig.dbDisconnection(connectionDB);
                      return response.status(500).json({ message: 'Houve um erro ao alterar o registro. Motivo: ' + error });
                  });

                  return;
              }

              response.status(200).json(dadosEstadoCivil);
              application.config.dbConfig.dbDisconnection(connectionDB);
          });
      });
  });
}

function realizaExclusaoEstadoCivil(application, request, response) {
  const idEstadoCivil = request.params.idEstadoCivil;
  const connectionDB  = application.config.dbConfig.dbConnection();
  const dbSysAddress  = new application.sysAddress.models.dbSysAddress(connectionDB);

  dbSysAddress.excluiEstadoCivil(idEstadoCivil, 1, 'MOTIVO PADRÃO DE EXCLUSÃO', function (error, result) {
      if (error) {
          application.config.dbConfig.dbDisconnection(connectionDB);
          return response.status(500).json({ message: 'Houve um erro ao excluir o registro. Motivo: ' + error + '.' });
      }

      response.status(200).json({ message: 'O registro foi excluído com sucesso!' });
      application.config.dbConfig.dbDisconnection(connectionDB);
  });
};

module.exports = {
  abreModalInsercaoEstadoCivil: abreModalInsercaoEstadoCivil,
  abreModalConsultaEstadoCivil: abreModalConsultaEstadoCivil,
  insereEstadoCivil: realizaInsercaoEstadoCivil,
  alteraEstadoCivil: realizaAlteracaoEstadoCivil,
  excluiEstadoCivil: realizaExclusaoEstadoCivil,
  consultaEstadoCivil: realizaConsultaEstadoCivil
}