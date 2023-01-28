import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProcessComponent } from './pages/process/process.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  {
    path: '',
    // component:HomeComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: '' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CafeteriamenuRoutingModule { }
