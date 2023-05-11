import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './component/header/header.component';
import { NuevoComponent } from './component/nuevo/nuevo.component';
import { EditarComponent } from './component/editar/editar.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    HeaderComponent,
    NuevoComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
