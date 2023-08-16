import { Menu } from "./menu.js";
import { ItemPedido } from "./item-pedido.js";
class CaixaDaLanchonete {

	menu = new Menu();

    calcularValorDaCompra(metodoDePagamento, itens) {
        
		let itensPedido = new Map();
		
		if (itens.length == 0) return "Não há itens no carrinho de compra!";
		if (metodoDePagamento != "dinheiro" && metodoDePagamento != "debito" && metodoDePagamento != "credito") return "Forma de pagamento inválida!";
		
		let codigo;
		let quantidade;
		let valorTotal = 0;
		let item;
		for (let i = 0; i < itens.length; i++) {
			item = itens[i].split(",");
			codigo = item[0];
			quantidade = item[1];
			
			if (this.menu.get(codigo) == null) return "Item inválido!";
			if (quantidade == 0) return "Quantidade inválida!";
			
			let itemP = new ItemPedido(this.menu.get(codigo), quantidade);
			
			valorTotal += itemP.getValorTotal();
			
			itensPedido.set(itemP.getItemMenu().getCodigo(), itemP.getItemMenu());
		}
		
		if (!this.validarItensPedido(itensPedido)) {
			return "Item extra não pode ser pedido sem o principal";
		}

		if (metodoDePagamento == "dinheiro") {
			valorTotal *= 0.95
		} else if (metodoDePagamento == "credito") {
			valorTotal *= 1.03
		}

		return ("R$ " + valorTotal.toFixed(2)).replace('.', ',');
    }

	validarItensPedido(itensPedido) {
		for (var [key, value] of itensPedido) {
			let itemMenu = value; 
			if (itemMenu.getPai() != null) {
				if (!itensPedido.has(itemMenu.getPai())) {
					return false;
				}
			}
		}
		return true;
	}

}

export { CaixaDaLanchonete };
