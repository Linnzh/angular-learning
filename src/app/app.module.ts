import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateAComponentComponent } from './components/demo/generate-a-component/generate-a-component.component';
import { CustomizeComponentNameComponent } from './components/demo/customize-component-name/customize-component-name.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateAComponentComponent,
    CustomizeComponentNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
