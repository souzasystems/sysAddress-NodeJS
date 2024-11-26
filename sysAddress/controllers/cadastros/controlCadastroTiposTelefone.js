function abreModalInsercaoTipoTelefone(application, request, response) {
    let dadosTipoTelefone = {
        TipoTelefone: null,
        opcaoSel: 'I'
    };

    response.render('cadastros/viewCadastroTiposTelefone', { dadosTipoTelefone: dadosTipoTelefone });
}

function abreModalConsultaTipoTelefone(application, request, response) {
    const idTipoTelefone        = request.query.idTipoTelefone;
    const descricaoTipoTelefone = request.query.descricaoTipoTelefone;
    const opcaoSel              = request.query.opcaoSel;

    const dadosTipoTelefone = {
        idTipoTelefone: idTipoTelefone,
        descricaoTipoTelefone: descricaoTipoTelefone,
        opcaoSel: opcaoSel
    };

    response.render('cadastros/viewCadastroTiposTelefone', { dadosTipoTelefone: dadosTipoTelefone });
}

function realizaConsultaTipoTelefone(application, request, response) {
    const idTipoTelefone   = request.query.idTipoTelefone;
    const opcaoSelecionada = request.query.opcaoSel;
    const connectionDB     = application.config.dbConfig.dbConnection();
    const dbSysAddress     = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getTipoTelefone(idTipoTelefone, function (error, result) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao consultar o registro. Motivo: ' + error });
        }

        let dadosTipoTelefone = {
            TipoTelefone: result[0],
            opcaoSel: opcaoSelecionada
        };

        response.status(200).json(dadosTipoTelefone);
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
}

function realizaInsercaoTipoTelefone(application, request, response) {
    const descricaoTipoTelefone = request.body.descricaoTipoTelefone;
    const logIdUsuario          = request.body.logIdUsuario;
    const connectionDB          = application.config.dbConfig.dbConnection();
    const dbSysAddress          = new application.sysAddress.models.dbSysAddress(connectionDB);

    application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
        }

        dbSysAddress.insereTipoTelefone(descricaoTipoTelefone, logIdUsuario, function (error, idTipoTelefone) {
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

            let dadosTipoTelefone = {
                message: 'O registro foi alterado com sucesso!',
                TipoTelefone: idTipoTelefone,
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

                response.status(200).json(dadosTipoTelefone);
                application.config.dbConfig.dbDisconnection(connectionDB);
            });
        });
    });
}

function realizaAlteracaoTipoTelefone(application, request, response) {
    const idTipoTelefone        = request.body.idTipoTelefone;
    const descricaoTipoTelefone = request.body.descricaoTipoTelefone;
    const logIdUsuario          = request.body.logIdUsuario;
    const connectionDB          = application.config.dbConfig.dbConnection();
    const dbSysAddress          = new application.sysAddress.models.dbSysAddress(connectionDB);

    application.config.dbConfig.dbStartTransaction(connectionDB, function (error) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao iniciar a transação. Motivo: ' + error });
        }

        dbSysAddress.alteraTipoTelefone(idTipoTelefone, descricaoTipoTelefone, logIdUsuario, function (error, idTipoTelefone) {
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

            let dadosTipoTelefone = {
                message: 'O registro foi alterado com sucesso!',
                TipoTelefone: idTipoTelefone,
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

                response.status(200).json(dadosTipoTelefone);
                application.config.dbConfig.dbDisconnection(connectionDB);
            });
        });
    });
}

function realizaExclusaoTipoTelefone(application, request, response) {
    const idTipoTelefone = request.params.idTipoTelefone;
    const connectionDB   = application.config.dbConfig.dbConnection();
    const dbSysAddress   = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.excluiTipoTelefone(idTipoTelefone, 1, 'MOTIVO PADRÃO DE EXCLUSÃO', function (error, result) {
        if (error) {
            application.config.dbConfig.dbDisconnection(connectionDB);
            return response.status(500).json({ message: 'Houve um erro ao excluir o registro. Motivo: ' + error + '.' });
        }

        response.status(200).json({ message: 'O registro foi excluído com sucesso!' });
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
};

module.exports = {
    modalInsercaoTipoTelefone: abreModalInsercaoTipoTelefone,
    modalConsultaTipoTelefone: abreModalConsultaTipoTelefone,
    viewInsereTipoTelefone: realizaInsercaoTipoTelefone,
    viewAlteraTipoTelefone: realizaAlteracaoTipoTelefone,
    viewExcluiTipoTelefone: realizaExclusaoTipoTelefone,
    viewConsultaTipoTelefone: realizaConsultaTipoTelefone
}