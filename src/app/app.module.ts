import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { TrainingComponent } from './Components/training/training.component';
import { TypeOfMachineComponent } from './Components/type-of-machine/type-of-machine.component';
import { SwfModelsComponent } from './Components/swf-models/swf-models.component';
import { EmbroideryBrandsComponent } from './Components/embroidery-brands/embroidery-brands.component';
import { PrinterBrandsComponent } from './Components/printer-brands/printer-brands.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SupportFormComponent,
    TrainingComponent,
    TypeOfMachineComponent,
    SwfModelsComponent,
    EmbroideryBrandsComponent,
    PrinterBrandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
