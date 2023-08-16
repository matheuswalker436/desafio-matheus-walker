class ItemMenu {

	codigo;
	descricao;
	valor;
	pai;
	
	constructor(codigo, descricao, valor, pai) {
	  this.codigo = codigo;
	  this.descricao = descricao;
	  this.valor = valor;
	  this.pai = pai;
	}

	getCodigo() {
		return this.codigo;
	}
	
	getDescricao() {
		return this.descricao;
	}
	
	getValor() {
		return this.valor;
	}
	
	getPai() {
		return this.pai;
	}
}

export { ItemMenu };