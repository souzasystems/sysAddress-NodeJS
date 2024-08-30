function controlPesquisaEstados(application, request, response) {
    response.render('pesquisas/viewPesquisaEstados');
}

module.exports = {
    viewPesquisaEstados: controlPesquisaEstados
}