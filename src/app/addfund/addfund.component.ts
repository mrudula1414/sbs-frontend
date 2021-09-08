import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-addfund',
  templateUrl: './addfund.component.html',
  styleUrls: ['./addfund.component.css']
})
export class AddfundComponent implements OnInit {

  quantity = '';
  companyDetails;
  companyId;
  userDetails;
  email;
  constructor(private router: Router, private getDataservice: GetDataService, private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.getDataservice.getUserDeatils(localStorage.getItem('username'))
    .subscribe(
      data => {
          this.userDetails = data;
          console.log(data);
      },
      error => { }
    )
  }
  getuserdetails()
  {
    this.getDataservice.getUserDeatils(localStorage.getItem('username'))
    .subscribe(
      data => {
          this.userDetails = data;
          console.log(data);
      },
      error => { }
    )
  }
 

  updateUserFunds(item: any){
    
    
    console.log(localStorage.getItem('username'))
    console.log(item)
  this.getDataservice.addfunds(localStorage.getItem('username'),item.value)
    .subscribe(
      data=>{ 
        console.log(data)
        if(data.status=="success")
          this.router.navigate(['profile/about']) 
          console.log(item.value)
          console.log(localStorage.getItem('username')) 
                   
       
      },
      error => {
          console.log(error)
      }
    )

      }
  
      checkQuantity(qty)
      {
        if(isNaN(Number(qty.value)) || Number(qty.value) <= 0)
          return false;
        else
          return true;
      }

}




