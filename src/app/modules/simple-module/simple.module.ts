import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainTableComponent} from './main-table/main-table.component';
import {ViewItemComponent} from './view-item/view-item.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {SimpleRoutingModule} from './simple-routing.module';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    SimpleRoutingModule
  ],
  declarations: [
    MainTableComponent,
    ViewItemComponent
  ],
  providers: []
})
export class SimpleModule {
}
