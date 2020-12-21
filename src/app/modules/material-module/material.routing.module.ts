import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {AuthGuard} from '../../core/guards/auth.guard';
import {DashboardItemComponent} from './items/dashboard/dashboard-item.component';
import {TableItemComponent} from './items/table/table-item.component';
import {FormItemComponent} from './items/form/form-item.component';

@NgModule({
  imports: [
    RouterModule.forChild([
        {
          path: '',
          component: DashboardComponent,
          // canActivate: [AuthGuard],
          children: [

            {
              path: '', redirectTo: 'dashboard-item', pathMatch: 'full',
            },
            {path: 'dashboard-item', component: DashboardItemComponent},
            {path: 'table-item', component: TableItemComponent},
            {path: 'form-item', component: FormItemComponent}
          ]
        }
      ],
    )
  ],
  exports: [RouterModule]
})

export class MaterialRoutingModule {

}

