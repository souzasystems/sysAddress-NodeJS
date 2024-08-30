function controlPesquisaTiposEndereco(application, require, response) {
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);
    
    dbSysAddress.getTiposEndereco(function(error, result) {
        //const tipoEndereco = new TiposEndereco();

        //tipoEndereco.setIdTipoEndereco(result[0].ID_TIPO_ENDERECO);
        //tipoEndereco.setDescricaoTipoEndereco(result[0].DESCRICAO_TIPO_ENDERECO);

        response.render('pesquisas/viewPesquisaTiposEndereco', {tiposEndereco: result[0]});
    });

    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaTiposEndereco: controlPesquisaTiposEndereco
}
