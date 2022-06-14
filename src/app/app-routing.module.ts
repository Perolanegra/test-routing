import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'hello' },
  { path: 'hello', component: HelloComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('../modules/user/user.module').then((m) => m.UserModule),
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes, {
  useHash: true,
  onSameUrlNavigation: 'reload',
});
