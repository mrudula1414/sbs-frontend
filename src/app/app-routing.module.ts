import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { BuyComponent } from './components/buy/buy.component';
import { SellComponent } from './components/sell/sell.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component';
import { MySharesComponent } from './components/my-shares/my-shares.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UnderProgressComponent } from './components/under-progress/under-progress.component'
import { AddfundComponent } from './addfund/addfund.component';
import { WatchlisthomeComponent } from './watchlisthome/watchlisthome.component';
import { MyactivityComponent } from './myactivity/myactivity.component';
import { MultiplewatchlistsComponent } from './multiplewatchlists/multiplewatchlists.component';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AboutComponent } from './components/profile/about/about.component';


export const AppRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'stocks', component: HomeComponent },
  { path: 'watch', component: WatchlisthomeComponent, },
  { path: 'buy/:id', component: BuyComponent },
  { path: 'sell/:id', component: SellComponent },
  { path: 'profile', component: ProfileComponent,
  children: [ 
    {
  path: 'addfunds',component: AddfundComponent
    },
    {
      path: 'about',component: AboutComponent
        },
       ]}, 
  { path: 'myactivity', component: MyactivityComponent},

 
  { path: 'view/:id', component: ViewComponent },
  { path: 'my-shares', component: MySharesComponent },
  
  { path: 'logout', component: LogoutComponent },
  {path: 'addfunds', component: AddfundComponent},
  { path: 'watchlists', component:MultiplewatchlistsComponent},
  { path: 'watchlists/:watchlistname', component:MultiplewatchlistsComponent},
  { path: '',component:PaginationComponent},
  {
   path:'**',component:UnderProgressComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
