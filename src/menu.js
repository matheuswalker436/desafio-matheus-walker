import { ItemMenu } from "./item-menu.js";
class Menu {

	itens;
	
	constructor() {
	
		this.itens = new Map();	
		
		this.itens.set('cafe'		, new ItemMenu('cafe', 'Café', 3, null));
		this.itens.set('chantily'	, new ItemMenu('chantily', 'Chantily (extra do Café)', 1.5, 'cafe'));
		this.itens.set('suco'		, new ItemMenu('suco', 'Suco Natural', 6.20, null));
		this.itens.set('sanduiche'	, new ItemMenu('sanduiche', 'Sanduíche', 6.50, null));
		this.itens.set('queijo'		, new ItemMenu('queijo', 'Queijo (extra do Sanduíche)', 2, 'sanduiche'));
		this.itens.set('salgado'	, new ItemMenu('salgado', 'Salgado', 7.25	, null));
		this.itens.set('combo1'		, new ItemMenu('combo1', '1 Suco e 1 Sanduíche', 9.5, null));
		this.itens.set('combo2'		, new ItemMenu('combo2', '1 Café e 1 Sanduíche', 7.5, null));
	
	}

	get(codigo) {
		return this.itens.get(codigo);
	}
}

export { Menu };