import { NgModule } from '@angular/core';
import {
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';

const materialModuleImports = [
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule
];

const materialModuleExports = [
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTabsModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule
];

@NgModule({
  imports: materialModuleImports,
  exports: materialModuleExports
})
export class MaterialModule {}
