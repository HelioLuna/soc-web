import { PedidoService } from './pedido.service';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { AlertaService } from '../util/alerta.service';
import { ErrorHandlerService } from '../util/error-handler.service';
import { Cliente } from '../domain/cliente.model';
import { Produto } from '../domain/produto.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit  {

  pedido: any = {cliente: null, item: {id: null, produto: null, quantidade: null, precoUnitario: null }};
  
  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  displayRentabilidade: string = "not-show-rentabilidade";
  corRentabilidade: string;
  labelRentabilidade: string;

  constructor(private pedidoService: PedidoService, 
    private alertaService: AlertaService, 
    private errorHandler: ErrorHandlerService) { }
  
  ngOnInit(): void {
    this.iniciarClientes();
    this.iniciarProdutos();
  }  

  iniciarClientes(){
    this.pedidoService.listarClientes().subscribe(data => {
      this.clientes = data;
    });
  } 

  iniciarProdutos(){
    this.pedidoService.listarProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  selecionaProduto(){
    console.log(this.pedido);
    this.pedido.item.precoUnitario = this.pedido.item.produto.precoUnitario;
  } 

  setarRentabilidade(){
    if(this.pedido.item.produto != null){
       if (this.pedido.item.precoUnitario > this.pedido.item.produto.precoUnitario){
        this.setarRentabilidadeOtima();
      }
      else if(this.pedido.item.precoUnitario >= this.getValorProdutoMenosDezPorCento() && this.pedido.item.precoUnitario <= this.pedido.item.produto.precoUnitario){
        this.setarRentabilidadeBoa();
      } 
      else{
        this.setarRentabilidadeRuim();
      }
    }
  }
  
  getValorProdutoMenosDezPorCento() {
    return this.pedido.item.produto.precoUnitario - (this.pedido.item.produto.precoUnitario * 10 /100);
  }

  setarRentabilidadeOtima() {
    this.displayRentabilidade = "show-rentabilidade";
    this.corRentabilidade =  "rentabilidade-otima";
    this.labelRentabilidade = "Ótima";  
  }

  setarRentabilidadeBoa() {
    this.displayRentabilidade = "show-rentabilidade";
    this.corRentabilidade =  "rentabilidade-boa";
    this.labelRentabilidade = "Boa";  
  }

  setarRentabilidadeRuim() {
    this.displayRentabilidade = "show-rentabilidade";
    this.corRentabilidade =  "rentabilidade-ruim";
    this.labelRentabilidade = "Ruim";  
  }
}
