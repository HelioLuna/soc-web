import { PedidoService } from './pedido.service';
import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../util/alerta.service';
import { ErrorHandlerService } from '../util/error-handler.service';
import { Cliente } from '../domain/cliente.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit  {

  pedido: any = {cliente: null, item: null};

  valuePrecoUnitario: any;
  
  clienteSelecionado: string;
  clientes: Cliente[] = [];
  clientesNomes: string[];

  constructor(private pedidoService: PedidoService, 
    private alertaService: AlertaService, 
    private errorHandler: ErrorHandlerService) { }
  
  ngOnInit(): void {
  }  

  buscarCliente(event) {
    this.clientes = [];
    this.pedidoService.listarClientesPorNome(event.query).subscribe(data => {
      this.clientes = data;
      console.log(this.clientes);
      this.criarListaStringCliente();
    });
  }
  
  criarListaStringCliente() {
    this.clientesNomes = [];
    for(let i = 0; i < this.clientes.length; i++) {
      this.clientesNomes.push(this.clientes[i].nome);
    }
  }   

  onSelectCliente(){
    console.log(this.clienteSelecionado);
    this.pedido.cliente = this.clientes.filter(c => c.nome = this.clienteSelecionado);
    console.log(this.pedido);
  }
}
