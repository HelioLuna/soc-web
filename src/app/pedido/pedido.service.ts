import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PedidoService {
    
    private resourceUrlCliente = environment.API_URL + '/api/cliente';
    private resourceUrlProduto = environment.API_URL + '/api/produto';

    constructor(private httpClient: HttpClient) { }

    listarClientes(): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlCliente}/listarClientes`);
    }

    listarProdutos(): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlProduto}/listarProdutos`);
    }

}
