import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetDataService } from '../../services/get-data.service';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/authenticate.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit {
  
 
  data:any;

 
  agInit(params)
  { 
    
    this.data=params.value;
  }

  companyId = '';
  quantity = '';
  companyDetails: Object;
 

 
  constructor(private router: Router,private toastr: ToastrService, private getDataservice: GetDataService,private watchService:AuthenticationService) { }
  watchList;
  ngOnInit() {
    this.loadData();
  }  
  loadData()
  {

    this.getDataservice.getWatchList(localStorage.getItem('username'))
    .subscribe(
      data => {
        if(data.length)
        {
          this.watchList = data;
          console.log(this.watchList)
        }
      },
      error => {
        
          console.log(error)
      }
    )
  }
  
  removeFromWatchlist(companyId)
  {
    this.getDataservice.removeWatchList(localStorage.getItem('username'),this.data)
      .subscribe(
        data => {
            if(data.status=="success")
            {
             
             
              this.toastr.success('Successfully removed from your Watchlist', companyId,{positionClass:"toast-bottom-center"});
              this.loadData();
            }
              
        },
        error => {
            console.log(error)
        }
    

      )
  
  }
  removewatchlist()
  {
    console.log('Removed')
    this.removeFromWatchlist(this.companyId)
    this.loadData();
  }

  goToBuyPage(companyId)
  {    
    this.router.navigate(['buy',companyId])
  }
  goToDetailedView(companyId)
  {    
    this.router.navigate(['view',companyId])
  }

}




