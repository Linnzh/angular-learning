import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerateAComponentComponent } from './components/demo/generate-a-component/generate-a-component.component';
import { CustomizeComponentNameComponent } from './components/demo/customize-component-name/customize-component-name.component';
import { ServiceAndDependencyInjectionComponent } from './components/demo/service-and-dependency-injection/service-and-dependency-injection.component';
import { AboutFormElementComponent } from './components/demo/about-form-element/about-form-element.component';
import { FormsModule } from '@angular/forms';
import { UpdateServiceDataComponent } from './components/demo/update-service-data/update-service-data.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateAComponentComponent,
    CustomizeComponentNameComponent,
    ServiceAndDependencyInjectionComponent,
    AboutFormElementComponent,
    UpdateServiceDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
