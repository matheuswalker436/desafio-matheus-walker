class ItemPedido {

	itemMenu;
	quantidade;


	constructor(itemMenu, quantidade) {
		this.itemMenu = itemMenu;
		this.quantidade = quantidade; 
	}
	
	getItemMenu() {
		return this.itemMenu;
	}
	
	getQuantidade() {
		return this.quantidade;
	}
	
	getValorTotal() {
		return this.itemMenu.getValor() * this.getQuantidade();
	}
}

export { ItemPedido };