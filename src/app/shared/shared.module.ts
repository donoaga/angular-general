import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ActionsComponent} from './components/actions/actions.component';
import {AddItemFormComponent} from './components/add-item-form/add-item-form.component';
import {EditInputComponent} from './components/edit-input/edit-input.component';
import {TextTruncatePipe} from './pipes/TextTruncate.pipe';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    ActionsComponent,
    AddItemFormComponent,
    EditInputComponent,

    TextTruncatePipe
  ],
  exports: [
    EditInputComponent,
    ActionsComponent,
    AddItemFormComponent
  ],
  providers: []
})
export class SharedModule {
}
