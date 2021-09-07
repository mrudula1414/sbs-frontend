import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../app/services/get-data.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authenticate.service';

@Component({
  selector: 'app-customcell',
  templateUrl: './customcell.component.html',
  styleUrls: ['./customcell.component.css']
})
export class CustomcellComponent implements OnInit {

  watchList;
  currentusername:String;
  data:any;
  params:any;
  constructor(private router: Router, 
    private getDataservice: GetDataService, 
    private toastr: ToastrService,
    private watchService:AuthenticationService) { }
  agInit(params)
  { 
    this.params=params;
    this.data=params.value;
  }

  ngOnInit() {
    this.getDataservice.getWatchList(localStorage.getItem('username'),this.watchlistname)
    .subscribe(
      data => {
        if(data.length)
          this.watchList = data;
      },
      error => {
          console.log(error)
      }
    )
  }
  addToWatchlist(Name,companyId,watchlistname)
  {
  this.getDataservice.addWatchList(Name,companyId,watchlistname)
  .subscribe(
    data => {console.log(data)
      console.log("hi")
      console.log(watchlistname)
      console.log(name)
      if(data.status=='company exist')
        this.toastr.error('Already Exists in your watchlist', companyId,{positionClass:"toast-bottom-center"});
      else
        this.toastr.info('Successfully added to your Watch list', companyId,{positionClass:"toast-bottom-center"});
    },
    error => {
        console.log(error)
    }
  
  
    )
  }
  // addToWatchlist2(companyName,companyId)
  // {
  // this.getDataservice.addWatchList2(companyName,companyId)
  // .subscribe(
  //   data => {console.log(data)
  //     if(data.status=='company exist')
  //       this.toastr.error('Already Exsist to your watchlist', companyName,{positionClass:"toast-bottom-center"});
  //     else
  //       this.toastr.info('Successfully added to your Watch list', companyName,{positionClass:"toast-bottom-center"});
  //   },
  //   error => {
  //       console.log(error)
  //   }
  
  
  //   )
  // }
  // addToWatchlist3(companyName,companyId)
  // {
  // this.getDataservice.addWatchList3(companyName,companyId)
  // .subscribe(
  //   data => {console.log(data)
  //     if(data.status=='company exist')
  //       this.toastr.error('Already Exsist to your watchlist', companyName,{positionClass:"toast-bottom-center"});
  //     else
  //       this.toastr.info('Successfully added to your Watch list', companyName,{positionClass:"toast-bottom-center"});
  //   },
  //   error => {
  //       console.log(error)
  //   }
  
  
  //   )
  // }
 watchlistname:String
  addingToWatchlist()
 {
  console.log(localStorage.getItem("username"))
  console.log(this.data)
  this.watchlistname="watchlist1"
  this.addToWatchlist(localStorage.getItem("username"), this.data,this.watchlistname);
 
 
 }
 addingToWatchlist2()
 {
  this.watchlistname="watchlist2"
  this.addToWatchlist(localStorage.getItem("username"), this.data,this.watchlistname);
 
 
 }
 addingToWatchlist3()
 {
  this.watchlistname="watchlist3"
  this.addToWatchlist(localStorage.getItem("username"), this.data,this.watchlistname);
 
 
 }
   /*console.log(localStorage.getItem("username"))
   console.log(this.data)

   this.watchService.addtoWatchlist(localStorage.getItem('username'),this.params)
    .subscribe(
      data => {console.log(data)
        if(data.status=='company exist')
          this.toastr.error('Already Exsist to your watchlist', this.params,{positionClass:"toast-bottom-center"});
        else
          this.toastr.info('Successfully added to your Watch list', this.params,{positionClass:"toast-bottom-center"});
      },
      error => {
          console.log(error)
      }*/
    //)
    /*this.watchService.addtoWatchlist(this.params,this.currentusername)
  
    .subscribe(
      data => {console.log(data)
        if(data.status=='company exist')
          this.toastr.error('Already Exists in your watchlist', this.params,{positionClass:"toast-bottom-center"});
        else{
          this.toastr.info('Successfully added to your Watch list',this.params,{positionClass:"toast-bottom-center"});
    
          console.log(this.params)*/
       // alert("successfully added");
      
   /* },
      error => {
          console.log(error)
      }
    )
        
  }*/

}



