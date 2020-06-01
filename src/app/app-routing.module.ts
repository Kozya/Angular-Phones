import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglPhonesComponent } from "./singl-phones/singl-phones.component";
import { ControlsComponent } from "./controls/controls.component";


const routes: Routes = [
  { path: "", component: ControlsComponent },
  { path: ":name", component: SinglPhonesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
