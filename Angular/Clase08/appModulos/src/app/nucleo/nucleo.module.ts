import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NucleoRoutingModule } from './nucleo-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NucleoRoutingModule
  ],
  declarations: [LoginComponent],
  exports: [NucleoRoutingModule]
})
export class NucleoModule { }
