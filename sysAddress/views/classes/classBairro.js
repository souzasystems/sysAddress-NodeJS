class Bairro {
    constructor(idBairro, idCidade, nomeBairro, dataVigoracao, inativo) {
        this.idBairro      = idBairro;
        this.idCidade      = idCidade;
        this.nomeBairro    = nomeBairro;
        this.dataVigoracao = dataVigoracao;
        this.inativo       = inativo;
    }

    // Getters
    getIdBairro() {
        return this.idBairro;
    }

    getIdCidade() {
        return this.idCidade;
    }

    getNomeBairro() {
        return this.nomeBairro;
    }

    getDataVigoracao() {
        return this.dataVigoracao;
    }

    getInativo() {
        return this.inativo;
    }

    // Setters
    setIdBairro(idBairro) {
        this.idBairro = idBairro;
    }

    setIdCidade(idCidade) {
        this.idCidade = idCidade;
    }

    setNomeBairro(nomeBairro) {
        this.nomeBairro = nomeBairro;
    }

    setDataVigoracao(dataVigoracao) {
        this.dataVigoracao = dataVigoracao;
    }

    setInativo(inativo) {
        this.inativo = inativo;
    }
}
