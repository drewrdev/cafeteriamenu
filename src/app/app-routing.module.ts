import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './cafeteriaMenu/pages/home/home.component';



const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./cafeteriaMenu/cafeteria-menu.module').then(m => m.CafeteriaMenuModule)
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
