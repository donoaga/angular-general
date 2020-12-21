import {NgModule} from '@angular/core';
import {DashboardComponent} from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashboardItemComponent} from './items/dashboard/dashboard-item.component';
import {ChartsModule} from 'ng2-charts';
import {TableItemComponent} from './items/table/table-item.component';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormItemComponent} from './items/form/form-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {MatDialogModule} from '@angular/material/dialog';
import {MaterialRoutingModule} from './material.routing.module';


@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    ChartsModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    MatDialogModule,
    MaterialRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardItemComponent,
    TableItemComponent,
    FormItemComponent
  ],
  providers: []
})
export class MaterialModuleModule {
}
