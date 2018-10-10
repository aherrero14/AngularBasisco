import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VetsComponent } from './components/vets/vets.component';
import { ListOwnersComponent } from './owners/list-owners/list-owners.component';
import { DetailOwnerComponent } from './owners/detail-owner/detail-owner.component';
import { FormOwnerComponent } from './owners/form-owner/form-owner.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'owners',
    component: ListOwnersComponent
  },
  {
    path: 'vets',
    component: VetsComponent
  },
  {
    path: 'owners/:id',
    component: DetailOwnerComponent
  },
  {
    path: 'owners-add',
    component: FormOwnerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
