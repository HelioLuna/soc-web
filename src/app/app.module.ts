import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ListboxModule} from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxCurrencyModule } from "ngx-currency";
import { UtilModule } from './util/util.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PedidoComponent } from './pedido/pedido.component';
import { LayoutComponent } from './layout/layout.component';
import { AppFooterComponent } from './layout/app.footer.component';
import { PedidoService } from './pedido/pedido.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandlerService } from './util/error-handler.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    LayoutComponent,
    AppFooterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UtilModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,    
    DropdownModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ListboxModule,
    NgxCurrencyModule
  ],
  providers: [
    PedidoService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
