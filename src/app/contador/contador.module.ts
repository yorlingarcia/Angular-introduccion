import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ContadorComponent],
  exports: [],
  imports: [BrowserModule],
})
export class ContadorModule {}
