import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Pedido } from './pedido.model';

@Injectable()
export class PedidoService {     
    private resourceUrlCliente = environment.API_URL + '/api/cliente';
    private resourceUrlProduto = environment.API_URL + '/api/produto';
    private resourceUrlPedido = environment.API_URL + '/api/pedido';

    constructor(private httpClient: HttpClient) { }

    listarClientes(): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlCliente}/listarClientes`);
    }

    listarProdutos(): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlProduto}/listarProdutos`);
    }

    consultarPorId(id: number): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlPedido}/consultarPorId/${id}`);
    }

    salvar(pedido: Pedido): Observable<Pedido> {
        return this.httpClient.post<Pedido>(`${this.resourceUrlPedido}/salvar`, pedido);
    }

    alterar(pedido: Pedido): Observable<Pedido> {
        return this.httpClient.put<Pedido>(`${this.resourceUrlPedido}/alterar`, pedido);
    }

}
