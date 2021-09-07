import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { BuyComponent } from './components/buy/buy.component';
import { HomeComponent } from './components/home/home.component';
import { MySharesComponent } from './components/my-shares/my-shares.component';
import { SellComponent } from './components/sell/sell.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ViewComponent } from './components/view/view.component'
import { LogoutComponent } from './components/logout/logout.component';
import { UnderProgressComponent } from './components/under-progress/under-progress.component';
import { CustomcellComponent } from './customcell/customcell.component';
import { AddfundComponent } from './addfund/addfund.component';
import { BuybuttonComponent } from './buybutton/buybutton.component';
import { SellbuttonComponent } from './sellbutton/sellbutton.component';
import { DetailsbuttonComponent } from './detailsbutton/detailsbutton.component';
import { WatchlisthomeComponent } from './watchlisthome/watchlisthome.component';
import { MyactivityComponent } from './myactivity/myactivity.component';
import { MultiplewatchlistsComponent } from './multiplewatchlists/multiplewatchlists.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { Watchlist1Component } from './watchlist1/watchlist1.component';
//import { SelectDropDownModule } from 'ngx-select-dropdown'
//import { NgbdDropdownBasic } from './dropdown-basic';
import { NgxPaginationModule} from 'ngx-pagination';
import { PaginationComponent } from './pagination/pagination.component'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    WatchListComponent,
    BuyComponent,
    HomeComponent,
    MySharesComponent,
    SellComponent,
    ProfileComponent,
    ViewComponent,
    LogoutComponent,
    UnderProgressComponent,
    CustomcellComponent,
    AddfundComponent,
    BuybuttonComponent,
    SellbuttonComponent,
    DetailsbuttonComponent,
    WatchlisthomeComponent,
    MyactivityComponent,
    MultiplewatchlistsComponent,
    PaginationComponent,
    
    //Watchlist1Component,
  
   // NgbdDropdownBasic,
  
   

   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ChartsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  entryComponents:[CustomcellComponent,BuybuttonComponent,SellbuttonComponent,DetailsbuttonComponent,WatchListComponent],

  bootstrap: [AppComponent]
})
export class AppModule { }
