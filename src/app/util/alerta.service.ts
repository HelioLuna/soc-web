import {Injectable} from '@angular/core';
import Swal from "sweetalert2";

const TITULO_ERRO = "ERRO";
const TITULO_AVISO = "AVISO";
const TITULO_SUCESSO = "SUCESSO";
const MENSAGEM_ACESSO_NEGADO = "Você não tem acesso ao serviço desejado, favor entrar em contato com o setor de suporte.";
const MENSAGEM_ERRO_DESCONECTADO = "Favor verificar a conexão de rede, caso o erro persistir favor entrar em contato com o setor de suporte.";
const MENSAGEM_ERRO_VAZIO = "O serviço apresentou falha, favor tentar novamente, caso o erro persistir favor entrar em contato com o setor de suporte.";
const MENSAGEM_SERVICO_NAO_ENCONTRADO = "Serviço não encontrado, favor tentar novamente, caso o erro persistir favor entrar em contato com o setor de suporte.";

@Injectable({
    providedIn: 'root'
})
export class AlertaService {

    constructor() {
    }

    exibirInformacao(mensagem) {
        Swal.fire({
            title: TITULO_AVISO,
            text: mensagem,
            icon: "info"
        });
    }

    exibirSucesso(mensagem) {
        Swal.fire({
            title: TITULO_SUCESSO,
            text: mensagem,
            icon: "success"
        });
    }

    exibirErro(mensagem) {
        Swal.fire({
            title: TITULO_ERRO,
            text: mensagem,
            icon: "error"
        });
    }

    exibirConfirmacao(titulo, mensagem, tipo) {
        return Swal.fire({
            title: titulo,
            text: mensagem,
            icon: tipo,
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            cancelButtonText: "NÃO",
            confirmButtonText: "SIM"
        });
    }

    exibirErroPorStatus(status) {
        let mensagem: string;
        let titulo: string = TITULO_ERRO;
        switch (status) {
            case 0:
                this.exibirErro(MENSAGEM_ERRO_DESCONECTADO);
                break;
            case 403:
                this.exibirErro(MENSAGEM_ACESSO_NEGADO);
                break;
            case 404:
                this.exibirErro(MENSAGEM_SERVICO_NAO_ENCONTRADO);
                break;
            default:
                this.exibirErro(MENSAGEM_ERRO_VAZIO);
        }
    }

    onResetarError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.onError(error);
    }

    onError(error) {
        this.exibirErro(error.message);
    }
}
