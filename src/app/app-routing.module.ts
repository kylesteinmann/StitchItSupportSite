import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupportFormComponent } from './Components/support-form/support-form.component';
import { HeaderComponent } from './Components/header/header.component';
import { TrainingComponent } from './Components/training/training.component';
import { TypeOfMachineComponent } from './Components/type-of-machine/type-of-machine.component';

const routes: Routes = [
  {path: 'supportForm', component: SupportFormComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'training', component: TrainingComponent},
  {path:'typeOfMachine', component: TypeOfMachineComponent},
  {path: '', component: TypeOfMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
