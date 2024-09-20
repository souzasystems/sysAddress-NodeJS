function controlCadastroTiposEndereco(application, require, response) {
    console.log(require.query);
    response.render('cadastros/viewCadastroTiposEndereco');
}

module.exports = {
    //viewCadastroTiposEndereco: controlCadastroTiposEndereco
    viewConsultaTipoEndereco: controlCadastroTiposEndereco
}