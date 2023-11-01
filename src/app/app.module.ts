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


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccessComponent } from './components/access/access.component';
import { TrainingComponent } from './components/training/training.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ResearchComponent } from './components/research/research.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoremipsumComponent } from './components/access/technology-catalogue/loremipsum/loremipsum.component';
import { TechnologyCatalogueComponent } from './components/access/technology-catalogue/technology-catalogue.component';
import { AccessModeComponent } from './components/access/access-mode/access-mode.component';
import { FundingForAccessComponent } from './components/access/funding-for-access/funding-for-access.component';
import { WhoCanApplyComponent } from './components/access/who-can-apply/who-can-apply.component';
import { ProposalSubmissionFaqComponent } from './components/access/proposal-submission-faq/proposal-submission-faq.component';
import { OpenCallsComponent } from './components/access/open-calls/open-calls.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutUsComponent,
    AccessComponent,
    TrainingComponent,
    FacilitiesComponent,
    ResearchComponent,
    ContactsComponent,
    DashboardComponent,
    LoremipsumComponent,
    TechnologyCatalogueComponent,
    AccessModeComponent,
    FundingForAccessComponent,
    WhoCanApplyComponent,
    ProposalSubmissionFaqComponent,
    OpenCallsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
