function controlCadastroTiposEndereco(application, require, response) {
<<<<<<< HEAD
    console.log('Hello');
    response.render('cadastros/viewCadastroTiposEndereco', {}, 'C');
}

module.exports = {
=======
    console.log(require.query);
    response.render('cadastros/viewCadastroTiposEndereco');
}

module.exports = {
    //viewCadastroTiposEndereco: controlCadastroTiposEndereco
>>>>>>> d5f51c4464128e656224b23b80068f7785e08afa
    viewConsultaTipoEndereco: controlCadastroTiposEndereco
}