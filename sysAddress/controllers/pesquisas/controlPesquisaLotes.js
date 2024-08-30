function controlPesquisaLotes(application, request, response) {
    response.render('pesquisas/viewPesquisaLotes');
}

module.exports = {
    viewPesquisaLotes: controlPesquisaLotes
}