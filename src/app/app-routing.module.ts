import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio/bio.component';
import { CvComponent } from './cv/cv.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: '', redirectTo: '/home/portfolio', pathMatch: 'full' },
  {
    path: 'home', 
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'bio', component: BioComponent },
      { path: 'cv', component: CvComponent }
    ]
  },
  { path: '**', redirectTo: '/home/portfolio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
