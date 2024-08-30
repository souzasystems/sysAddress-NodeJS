function controlPesquisaLoteamentos(application, request, response) {
    response.render('pesquisas/viewPesquisaLoteamentos');
}

module.exports = {
    viewPesquisaLoteamentos: controlPesquisaLoteamentos
}