import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SIGNUPPageRoutingModule } from './SIGNUP-routing.module';

import { SIGNUPPage } from './SIGNUP.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SIGNUPPageRoutingModule
  ],
  declarations: [SIGNUPPage]
})
export class SIGNUPPageModule {}
