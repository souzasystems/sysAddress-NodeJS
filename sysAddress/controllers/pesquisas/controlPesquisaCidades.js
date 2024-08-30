function controlPesquisaCidades(application, request, response) {
    response.render('pesquisas/viewPesquisaCidades');
}

module.exports = {
    viewPesquisaCidades: controlPesquisaCidades
}