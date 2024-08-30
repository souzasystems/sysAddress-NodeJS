function controlPrincipal(application, require, response) {
    response.render('outros/viewPrincipal');
}

module.exports = {
    viewPrincipal: controlPrincipal
}
