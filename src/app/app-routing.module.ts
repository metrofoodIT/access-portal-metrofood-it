import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TrainingComponent } from './components/training/training.component';
import { ResearchComponent } from './components/science/research.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TechnologyCatalogueComponent } from './components/technology-catalogue/technology-catalogue.component';
import { LoremipsumComponent } from './components/technology-catalogue/loremipsum/loremipsum.component';
import { LivingLabsComponent } from './components/living-labs/living-labs.component';
import { OpenCallsComponent } from './components/open-calls/open-calls.component';
import { ContattiComponent } from './components/it/contatti/contatti.component';


const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'training', component: TrainingComponent},
    {path: 'living-labs', component: LivingLabsComponent},
    {path: 'science', component: ResearchComponent},
    {path: 'contacts', component: ContactsComponent},
    {path: 'technology-catalogue', component: TechnologyCatalogueComponent},
    {path: 'technology-catalogue/loremipsum', component: LoremipsumComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'open-calls', component: OpenCallsComponent},
    {path: 'it/contatti', component: ContattiComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
