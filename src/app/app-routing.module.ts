import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //{ path: 'pedido/:id',      component: HeroDetailComponent },
  {
    path: 'pedido',
    component: PedidoComponent,
    data: { title: 'Pedido' }
  },
  { path: '',
    redirectTo: '/pedido',
    pathMatch: 'full'
  },
//{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
