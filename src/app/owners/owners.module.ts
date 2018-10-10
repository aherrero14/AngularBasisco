import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { DetailOwnerComponent } from './detail-owner/detail-owner.component';
import { FormOwnerComponent } from './form-owner/form-owner.component';
import { OwnerService } from './owner.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    ListOwnersComponent,
    DetailOwnerComponent,
    FormOwnerComponent
  ],
  exports: [
    ListOwnersComponent
  ],
  providers: [
    OwnerService
  ]
})
export class OwnersModule { }
