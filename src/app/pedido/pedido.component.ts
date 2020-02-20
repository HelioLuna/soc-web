import { PedidoService } from './pedido.service';
import {NgForm} from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { AlertaService } from '../util/alerta.service';
import { ErrorHandlerService } from '../util/error-handler.service';
import { Cliente } from '../domain/cliente.model';
import { Produto } from '../domain/produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit  {

  @Input() pedido: any = {id: null, cliente: null, item: {id: null, produto: null, quantidade: null, precoUnitario: null }};
  
  clientes: Cliente[] = [];
  produtos: Produto[] = [];

  displayRentabilidade: string = "not-show-rentabilidade";
  corRentabilidade: string;
  labelRentabilidade: string;

  isValoresSetado: boolean;

  constructor(private pedidoService: PedidoService,
    private rotaAtivada: ActivatedRoute,
    private alertaService: AlertaService, 
    private errorHandler: ErrorHandlerService) { }
  
  ngOnInit(): void {
    this.iniciarClientes();
    this.iniciarProdutos();
    this.verificarSeRotaEhDeAlteracao();
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

  private verificarSeRotaEhDeAlteracao() {
    this.rotaAtivada.params.subscribe((parametros) => {
        if (parametros['id']) {
            this.consultarPorId(parametros['id']);
        } 
      });
  }

  consultarPorId(id: any) {
    this.pedidoService.consultarPorId(id).subscribe(pedidoRetornado => {
      console.log(pedidoRetornado);
      if(pedidoRetornado){
        this.pedido = pedidoRetornado;
        this.setarRentabilidade(this.pedido.item.precoUnitario);
      }
    });
  }

  confirmarPedido(frm: NgForm){
    if(this.pedido.id != null) {
      this.pedidoService.alterar(this.pedido).subscribe(pedidoCriado => {
        this.alertaService.exibirSucesso("Pedido alterado com sucesso.");
        frm.reset();
      },
      erro => this.errorHandler.handle(erro));
    }else {
      this.pedidoService.salvar(this.pedido).subscribe(pedidoCriado => {
        this.alertaService.exibirSucesso("Pedido criado com sucesso.");
        frm.reset();
      },
      erro => this.errorHandler.handle(erro));
    }

  }

  selecionaProduto(){
    this.pedido.item.precoUnitario = this.pedido.item.produto.precoUnitario;
    this.setarRentabilidade(this.pedido.item.precoUnitario);
  } 

  setarRentabilidade(precoUnitario){
    if(this.pedido.item.produto != null){
       if (precoUnitario > this.pedido.item.produto.precoUnitario){
        this.setarRentabilidadeOtima();
      }
      else if(precoUnitario >= this.getValorProdutoMenosDezPorCento() && precoUnitario <= this.pedido.item.produto.precoUnitario){
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

  checkValoresPedido(){
    if(!this.pedido.cliente){
      return false;
    } 
    else if(!this.pedido.item.produto){
      return false;
    }
    else if(!this.pedido.item.quantidade){
      return false;
    }    
    else if(!this.pedido.item.precoUnitario){
      return false;
    }
    else{
      return true;
    }
  }
}
