import { PaginaNaoEncontradaComponent } from './util/pagina-nao-encontrada.component';
import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'pedido', component: PedidoComponent, data: { title: 'Pedido' }},
      {path: 'pedido/:id', component: PedidoComponent, data: { title: 'Pedido' }},
      {path: '', redirectTo: '/pedido',pathMatch: 'full' } ,
      { path: '**', component: PaginaNaoEncontradaComponent }  
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
