import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { HomeComponent } from './components/home/home.component';
import { VetsComponent } from './components/vets/vets.component';
import { OwnersModule } from './owners/owners.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VetsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SearchModule,
    OwnersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
