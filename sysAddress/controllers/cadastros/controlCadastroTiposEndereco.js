function abreModalInsercaoTipoEndereco(application, request, response) {
  let dadosTipoEndereco = {
    tipoEndereco: null,
    opcaoSel: 'I'
  };
  
  response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
}

function abreModalConsultaTipoEndereco(application, request, response) {
  const idTipoEndereco        = request.query.idTipoEndereco;
  const descricaoTipoEndereco = request.query.descricaoTipoEndereco;
  const opcaoSel              = request.query.opcaoSel;
  
  const dadosTipoEndereco = {
    idTipoEndereco: idTipoEndereco,
    descricaoTipoEndereco: descricaoTipoEndereco,
    opcaoSel: opcaoSel
  };
  console.log(dadosTipoEndereco);
  response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });    
}

function realizaConsultaTipoEndereco(application, request, response) {
    const idTipoEndereco   = request.query.idTipoEndereco;
    const opcaoSelecionada = request.query.opcaoSel;
    const connectionDB     = application.config.dbConfig.dbConnection();
    const dbSysAddress     = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getTipoEndereco(idTipoEndereco, function(error, result) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({message: 'Houve um erro ao consultar o registro. Motivo: ' + error});
        }
        
        let dadosTipoEndereco = {
            tipoEndereco: result[0],
            opcaoSel: opcaoSelecionada
        };

        response.status(200).json(dadosTipoEndereco);
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
}

function realizaInsercaoTipoEndereco(application, request, response) {
    const descricaoTipoEndereco = request.body.descricaoTipoEndereco;
    const logIdUsuario          = request.body.logIdUsuario;
    const connectionDB          = application.config.dbConfig.dbConnection();
    const dbSysAddress          = new application.sysAddress.models.dbSysAddress(connectionDB);

    application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
        }

        dbSysAddress.insereTipoEndereco(descricaoTipoEndereco, logIdUsuario, function (error, idTipoEndereco) {
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
    
            let dadosTipoEndereco = {
                message: 'O registro foi alterado com sucesso!',
                tipoEndereco: idTipoEndereco,
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

                response.status(200).json(dadosTipoEndereco);
                application.config.dbConfig.dbDisconnection(connectionDB);    
            });
        });
    });
}

function realizaAlteracaoTipoEndereco(application, request, response) {
    const idTipoEndereco        = request.body.idTipoEndereco;
    const descricaoTipoEndereco = request.body.descricaoTipoEndereco;
    const logIdUsuario          = request.body.logIdUsuario;
    const connectionDB          = application.config.dbConfig.dbConnection();
    const dbSysAddress          = new application.sysAddress.models.dbSysAddress(connectionDB);

    application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
        }

        dbSysAddress.alteraTipoEndereco(idTipoEndereco, descricaoTipoEndereco, logIdUsuario, function (error, idTipoEndereco) {
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
    
            let dadosTipoEndereco = {
                message: 'O registro foi alterado com sucesso!',
                tipoEndereco: idTipoEndereco,
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

                response.status(200).json(dadosTipoEndereco);
                application.config.dbConfig.dbDisconnection(connectionDB);    
            });
        });
    });
}

function realizaExclusaoTipoEndereco(application, request, response) {
    const idTipoEndereco = request.params.idTipoEndereco;
    const connectionDB   = application.config.dbConfig.dbConnection();
    const dbSysAddress   = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.excluiTipoEndereco(idTipoEndereco, 1, 'MOTIVO PADRÃO DE EXCLUSÃO', function(error, result) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({message: 'Houve um erro ao excluir o registro. Motivo: ' + error + '.'});
        }

        response.status(200).json({message: 'O registro foi excluído com sucesso!'});
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
};

module.exports = {
    modalInsercaoTipoEndereco: abreModalInsercaoTipoEndereco,
    modalConsultaTipoEndereco: abreModalConsultaTipoEndereco,
    viewInsereTipoEndereco: realizaInsercaoTipoEndereco,
    viewAlteraTipoEndereco: realizaAlteracaoTipoEndereco,
    viewExcluiTipoEndereco: realizaExclusaoTipoEndereco,
    viewConsultaTipoEndereco: realizaConsultaTipoEndereco    
}