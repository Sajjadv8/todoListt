import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { SloginComponent } from './slogin/slogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FormComponent,
    ListComponent,
    SloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
