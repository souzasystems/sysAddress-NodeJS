function controlPesquisaDistritos(application, request, response) {
    response.render('pesquisas/viewPesquisaDistritos');
}

module.exports = {
    viewPesquisaDistritos: controlPesquisaDistritos
}