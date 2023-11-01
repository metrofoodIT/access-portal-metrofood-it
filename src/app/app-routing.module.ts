import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AccessComponent } from './components/access/access.component';
import { TrainingComponent } from './components/training/training.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { ResearchComponent } from './components/research/research.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoremipsumComponent } from './components/access/technology-catalogue/loremipsum/loremipsum.component';
import { TechnologyCatalogueComponent } from './components/access/technology-catalogue/technology-catalogue.component';
import { AccessModeComponent } from './components/access/access-mode/access-mode.component';
import { FundingForAccessComponent } from './components/access/funding-for-access/funding-for-access.component';
import { WhoCanApplyComponent } from './components/access/who-can-apply/who-can-apply.component';
import { ProposalSubmissionFaqComponent } from './components/access/proposal-submission-faq/proposal-submission-faq.component';
import { OpenCallsComponent } from './components/access/open-calls/open-calls.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'access', component: AccessComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'facilities', component: FacilitiesComponent},
    {path: 'research', component: ResearchComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'access/technology-catalogue', component: TechnologyCatalogueComponent},
    {path: 'access/technology-catalogue/loremipsum', component: LoremipsumComponent},
    {path: 'access/access-mode', component: AccessModeComponent},
    {path: 'access/funding-for-access', component: FundingForAccessComponent},
    {path: 'access/who-can-apply', component: WhoCanApplyComponent},
    {path: 'access/open-calls', component: OpenCallsComponent},
    {path: 'access/proposal-submission-faq', component: ProposalSubmissionFaqComponent},
  ]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
