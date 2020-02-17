import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertaService } from './alerta.service';

@Injectable()
export class ErrorHandlerService {

  constructor(private alertaService: AlertaService) { }

  handle(errorResponse: any) {
    let msg: string;

    if (typeof errorResponse === 'string') {
      msg = errorResponse;

    } else if (errorResponse instanceof HttpErrorResponse
        && errorResponse.status >= 400 && errorResponse.status <= 499) {
      msg = 'Ocorreu um erro ao processar a sua solicitação';

      if (errorResponse.status === 403) {
        msg = 'Você não tem permissão para executar esta ação';
      }

      try {
        if ( typeof errorResponse.error === 'string') {
          msg = errorResponse.error;
        } else {
          msg = errorResponse.error[0].mensagemUsuario;
        }
      } catch (e) { }

      console.error('Ocorreu um erro', errorResponse);

    } else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
      console.error('Ocorreu um erro', errorResponse);
    }

    this.alertaService.exibirErro(msg);
  }

}
