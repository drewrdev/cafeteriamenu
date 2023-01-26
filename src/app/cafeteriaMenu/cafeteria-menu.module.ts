import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProcessComponent } from './pages/process/process.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { CafeteriamenuRoutingModule } from './cafeteriamenu-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ProcessComponent,
    MenuComponent,
    GalleryComponent,
    ContactComponent,
    // HeaderComponent,
    //FooterComponent,
  ],
  imports: [
    CommonModule,
    CafeteriamenuRoutingModule,
  ]
})
export class CafeteriaMenuModule { }
