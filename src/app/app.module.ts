import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { AboutComponent } from './about/about.component';
import { NgxPaginationModule } from 'ngx-pagination';

const appRoute: Routes = [
  { path: '', component: ManageDataComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manage-data', component: ManageDataComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HomeComponent,
    ManageDataComponent,
    AboutComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
