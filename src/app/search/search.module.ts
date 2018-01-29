import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormSearchComponent } from './form-search/form-search.component';
import { HttpClientModule } from '@angular/common/http';
import { ListOwnersComponent } from './list-owners/list-owners.component';
import { OwnerService } from './owner.service';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports: [
    FormSearchComponent, ListOwnersComponent
  ],
  declarations: [FormSearchComponent, ListOwnersComponent],
  providers: [OwnerService]
})
export class SearchModule { }
