function realizaInsercaoTipoEndereco(application, request, response) {
    let dadosTipoEndereco = {
        tipoEndereco: null,
        opcaoSel: 'I'
    };
    
    response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
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
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

function realizaExclusaoTipoEndereco(application, request, response) {
    const dadosTipoEndereco = request.query;
    const connectionDB      = application.config.dbConfig.dbConnection();
    const dbSysAddress      = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.excluiTipoEndereco(dadosTipoEndereco.idTipoEndereco, 1, 'MOTIVO PADRÃO DE EXCLUSÃO', function(error, result) {

    });

    application.config.dbConfig.dbDisconnection(connectionDB);
};

function realizaConsultaTipoEndereco(application, request, response) {
    const dadosTipoEndereco = request.query;
    const connectionDB      = application.config.dbConfig.dbConnection();
    const dbSysAddress      = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getTipoEndereco(dadosTipoEndereco.idTipoEndereco, function(error, result) {
        let dadosTipoEndereco = {
            tipoEndereco: result[0],
            opcaoSel: 'C'
        };
        
        response.render('cadastros/viewCadastroTiposEndereco', { dadosTipoEndereco: dadosTipoEndereco });
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewInsereTipoEndereco: realizaInsercaoTipoEndereco,
    viewAlteraTipoEndereco: realizaAlteracaoTipoEndereco,
    viewExcluiTipoEndereco: realizaExclusaoTipoEndereco,
    viewConsultaTipoEndereco: realizaConsultaTipoEndereco    
}