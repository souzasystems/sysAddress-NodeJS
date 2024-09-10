function controlPesquisaEstados(application, request, response) {
    response.render('pesquisas/viewPesquisaEstados', {estados: null});
}

function consultaEstadosPorNome(application, require, response) {
    const dadosEstado  = require.body;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getEstados(dadosEstado.nomeEstado, dadosEstado.estadoInativo, function(error, result) {
        let estadosEncontrados = result[0];

        response.json(estadosEncontrados);
    });
    
    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaEstados: controlPesquisaEstados,
    consultaEstadosPorNome: consultaEstadosPorNome
}