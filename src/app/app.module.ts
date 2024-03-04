import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TrainingComponent } from './components/training/training.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ResearchComponent } from './components/science/research.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoremipsumComponent } from './components/technology-catalogue/loremipsum/loremipsum.component';
import { TechnologyCatalogueComponent } from './components/technology-catalogue/technology-catalogue.component';
import { OpenCallsComponent } from './components/open-calls/open-calls.component';
import { LivingLabsComponent } from './components/living-labs/living-labs.component';
import { ContattiComponent } from './components/it/contatti/contatti.component';
import { OpItem1Component } from './components/open-calls/open-calls-item/op-item1/op-item1.component';
import { OpItem2Component } from './components/open-calls/open-calls-item/op-item2/op-item2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    TrainingComponent,
    FacilitiesComponent,
    ResearchComponent,
    ContactsComponent,
    DashboardComponent,
    LoremipsumComponent,
    TechnologyCatalogueComponent,
    OpenCallsComponent,
    LivingLabsComponent,
    ContattiComponent,
    OpItem1Component,
    OpItem2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatExpansionModule,
    MatCardModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
