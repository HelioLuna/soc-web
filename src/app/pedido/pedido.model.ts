import { Item } from './../domain/item.model';
import { Cliente } from './../domain/cliente.model';
export class Pedido {
    id: number;
    cliente: Cliente;
    item: Item;
}