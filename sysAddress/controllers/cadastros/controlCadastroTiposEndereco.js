function abreModalCadastroTipoEndereco(application, request, response) {
    let dadosTipoEndereco = {
        tipoEndereco: null,
        opcaoSel: 'I'
    };

    response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
}

function realizaInsercaoTipoEndereco(application, request, response) {
    const descricaoTipoEndereco = request.body.descricaoTipoEndereco;
    const logIdUsuario          = request.body.logIdUsuario;
    const connectionDB          = application.config.dbConfig.dbConnection();
    const dbSysAddress          = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.insereTipoEndereco(descricaoTipoEndereco, logIdUsuario, function (error, result) {
        if (error) {
            return response.status(500).json({ message: 'Houve um erro ao inserir o registro. Motivo: ' + error });
        }

        let dadosTipoEndereco = {
            message: 'O registro foi inserido com sucesso!',
            tipoEndereco: idTipoEndereco,
            opcaoSel: 'I'
        };

        response.status(200).json(dadosTipoEndereco);
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
}

function realizaAlteracaoTipoEndereco(application, request, response) {
    const dadosTipoEndereco = request.query;
    const connectionDB      = application.config.dbConfig.dbConnection();
    const dbSysAddress      = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getTipoEndereco(dadosTipoEndereco.idTipoEndereco, function(error, result) {
        let dadosTipoEndereco = {
            tipoEndereco: result[0],
            opcaoSel: 'A'
        };
        
        response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
}

function realizaExclusaoTipoEndereco(application, request, response) {
    const idTipoEndereco = request.params.idTipoEndereco;
    const connectionDB   = application.config.dbConfig.dbConnection();
    const dbSysAddress   = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.excluiTipoEndereco(idTipoEndereco, 1, 'MOTIVO PADRÃO DE EXCLUSÃO', function(error, result) {
        if (error) {
            return response.status(500).json({message: 'Houve um erro ao excluir o registro. Motivo: ' + error + '.'});
        }

        response.status(200).json({message: 'O registro foi excluído com sucesso!'});
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
};

function realizaConsultaTipoEndereco(application, request, response) {
    const idTipoEndereco   = request.query.idTipoEndereco;
    const opcaoSelecionada = request.query.opcaoSel;
    const connectionDB     = application.config.dbConfig.dbConnection();
    const dbSysAddress     = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getTipoEndereco(idTipoEndereco, function(error, result) {
        if (error) {
            console.log(error);
            return response.status(500).json({message: 'Houve um erro ao consultar o registro. Motivo: ' + error});
        }
        
        let dadosTipoEndereco = {
            tipoEndereco: result[0],
            opcaoSel: opcaoSelecionada
        };

        response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
        application.config.dbConfig.dbDisconnection(connectionDB);
    });
}

module.exports = {
    modalCadastroTipoEndereco: abreModalCadastroTipoEndereco,
    viewInsereTipoEndereco: realizaInsercaoTipoEndereco,
    viewAlteraTipoEndereco: realizaAlteracaoTipoEndereco,
    viewExcluiTipoEndereco: realizaExclusaoTipoEndereco,
    viewConsultaTipoEndereco: realizaConsultaTipoEndereco    
}