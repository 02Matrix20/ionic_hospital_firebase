import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { UserGroupComponentRoutingModule } from './user-group.component-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserGroupComponentRoutingModule
  ],
  declarations: []
})
export class UserGroupComponentModule {}
