import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        // {
        //   path: '',
        //   component: AppComponent
        // },
        {
          path: 'dashboard',
          loadChildren: () => import('./modules/material-module/material-module.module').then(m => m.MaterialModuleModule)
        },
        {
          path: 'simple',
          loadChildren: () => import('./modules/simple-module/simple.module').then(m => m.SimpleModule)
        }
      ],
    )
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

