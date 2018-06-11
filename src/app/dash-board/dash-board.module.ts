import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './dash-board.component';

const declarationsArray = [
  DashBoardComponent
];
const importsArray = [
  CommonModule
];
const providersArray = [];


@NgModule({
  declarations: declarationsArray,
  imports: importsArray,
  providers: providersArray,
  bootstrap: [DashBoardModule]
})
export class DashBoardModule { }
