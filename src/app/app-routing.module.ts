import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { TrainingComponent } from './Components/training/training.component';
import { TypeOfMachineComponent } from './Components/type-of-machine/type-of-machine.component';
import { SwfModelsComponent } from './Components/swf-models/swf-models.component';
import { EmbroideryBrandsComponent } from './Components/embroidery-brands/embroidery-brands.component';
import { PrinterBrandsComponent } from './Components/printer-brands/printer-brands.component';

const routes: Routes = [
  {path: 'supportForm', component: SupportFormComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'training', component: TrainingComponent},
  {path:'typeOfMachine', component: TypeOfMachineComponent},
  {path:'swfModels', component: SwfModelsComponent},
  {path:'embroideryBrands', component: EmbroideryBrandsComponent},
  {path:'printerBrands', component: PrinterBrandsComponent},

  {path: '', component: TypeOfMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
