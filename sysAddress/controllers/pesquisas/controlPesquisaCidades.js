function controlPesquisaCidades(application, request, response) {
    response.render('pesquisas/viewPesquisaCidades');
}

function consultaCidadesPorNome(application, require, response) {
    const dadosCidade  = require.body;
    const connectionDB = application.config.dbConfig.dbConnection();
    const dbSysAddress = new application.sysAddress.models.dbSysAddress(connectionDB);

    dbSysAddress.getCidades(dadosCidade.nomeCidade, dadosCidade.cidadeInativa, function(error, result) {
        let cidadesEncontradas = result[0];

        response.json(cidadesEncontradas);
    });
    
    application.config.dbConfig.dbDisconnection(connectionDB);
}

module.exports = {
    viewPesquisaCidades: controlPesquisaCidades,
    consultaCidadesPorNome: consultaCidadesPorNome
}