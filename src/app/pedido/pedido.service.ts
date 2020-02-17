import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class PedidoService {

    private resourceUrlCliente = environment.API_URL + '/api/cliente';

    constructor(private httpClient: HttpClient) { }

    listarClientesPorNome(nome: string): Observable<any> {
        return this.httpClient.get(`${this.resourceUrlCliente}/listarClientesPorNome/${nome}`);
    }
          
}
