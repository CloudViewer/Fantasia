import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./sys-admin/sys-admin.module').then(m => m.SysAdminModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./sys-core/sys-core.module').then(m => m.SysCoreModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
