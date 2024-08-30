class Condominio {
    constructor(idCondominio, idBairro, nomeCondominio, inativo) {
        this.idCondominio   = idCondominio;
        this.idBairro       = idBairro;
        this.nomeCondominio = nomeCondominio;
        this.inativo        = inativo;
    }

    // Getters
    getIdCondominio() {
        return this.idCondominio;
    }

    getIdBairro() {
        return this.idBairro;
    }

    getNomeCondominio() {
        return this.nomeCondominio;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdCondominio(idCondominio) {
        this.idCondominio = idCondominio;
    }

    setIdBairro(idBairro) {
        this.idBairro = idBairro;
    }

    setNomeCondominio(nomeCondominio) {
        this.nomeCondominio = nomeCondominio;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
