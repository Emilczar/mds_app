import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChemPage } from './chem';

@NgModule({
  declarations: [
    ChemPage,
  ],
  imports: [
    IonicPageModule.forChild(ChemPage),
  ],
})
export class ChemPageModule {}
