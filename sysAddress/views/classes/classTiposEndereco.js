class TiposEndereco {
  constructor() {
      this.idTipoEndereco        = null;
      this.descricaoTipoEndereco = null;
  }

  getIdTipoEndereco() {
      return this.idTipoEndereco;
  }

  getDescricaoTipoEndereco() {
      return this.descricaoTipoEndereco;
  }

  setIdTipoEndereco(value) {
      this.idTipoEndereco = value;
  }

  setDescricaoTipoEndereco(value) {
      this.descricaoTipoEndereco = value;
  }
}

module.exports = TiposEndereco;
