import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: 'user', redirectTo: '', pathMatch: 'full' },
  {
    path: '', // rota/:param
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    // resolvers
  ],
})
export class UserRoutingModule {}
