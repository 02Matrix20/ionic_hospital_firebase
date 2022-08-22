import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestHttpPageRoutingModule } from './test-http-routing.module';

import { TestHttpPage } from './test-http.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestHttpPageRoutingModule
  ],
  declarations: [TestHttpPage]
})
export class TestHttpPageModule {}
