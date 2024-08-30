function controlPesquisaBairros(application, request, response) {
    response.render('pesquisas/viewPesquisaBairros');
}

module.exports = {
    viewPesquisaBairros: controlPesquisaBairros
}
