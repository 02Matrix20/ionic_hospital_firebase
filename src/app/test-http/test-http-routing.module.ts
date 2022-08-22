import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestHttpPage } from './test-http.page';

const routes: Routes = [
  {
    path: '',
    component: TestHttpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestHttpPageRoutingModule {}
