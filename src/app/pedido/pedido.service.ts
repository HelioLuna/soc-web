import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable()
export class PedidoService {
    private resourceUrlSolicitacao = environment.API_URL + '/api/resource';

    constructor(private httpClient: HttpClient) { }

    
}
