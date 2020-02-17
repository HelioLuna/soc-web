import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
  <div class="exception-body notfound-page">
    <div class="exception-type">
        <img src="../../../assets/layout/images/404.svg">
    </div>
    
    <div class="card exception-panel">
        <i class="material-icons">&#xE001;</i>
        <h1>Page Not Found</h1>
        <div class="exception-detail">The resource you are looking for does not exist.</div>
        <button class="ui-button secondary" (click)="irParaLogin()">
            <span class="ui-button-text">Homepage</span>
        </button>
    </div>
    </div>
  `,
  styles: []
})
export class PaginaNaoEncontradaComponent {

    constructor(private router: Router) {

    }

    irParaLogin() {
        this.router.navigate(['/pedido']);
    }
}
