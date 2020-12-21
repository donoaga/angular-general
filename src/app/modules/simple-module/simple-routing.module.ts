import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainTableComponent} from './main-table/main-table.component';
import {ViewItemComponent} from './view-item/view-item.component';

const routes: Routes = [
  {path: '', component: MainTableComponent},
  {path: 'view/:id', component: ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleRoutingModule {
}
