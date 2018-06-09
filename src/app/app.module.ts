import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { MaterialModule } from './material.module';


const declarationsArray = [AppComponent];
const importsArray = [
  BrowserModule,
  routing,
  MaterialModule
];
const providersArray = [];


@NgModule({
  declarations: declarationsArray,
  imports: importsArray,
  providers: providersArray,
  bootstrap: [AppComponent]
})
export class AppModule { }
