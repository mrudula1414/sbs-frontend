import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sellbutton',
  templateUrl: './sellbutton.component.html',
  styleUrls: ['./sellbutton.component.css']
})
export class SellbuttonComponent implements OnInit {

  data:any;

 
  agInit(params)
  { 
    
    this.data=params.value;
  }

  companyId = '';
  quantity = '';
  companyDetails: Object;
  constructor(private router: Router)
  {

  }

  ngOnInit() {
    /*this._Activatedroute.paramMap.subscribe(params => { 
      this.companyId = params.get('id'); 
      });
      
      this.getDataservice.getOneCompany(this.companyId)
      .subscribe(
        data => {
            this.companyDetails = data;
        },
      
        error => {
            console.log(error)
        }
      )*/
  }

  goToSellPage()
  {    
   
    console.log(this.data)
    this.router.navigate(['sell',this.data])
  }

}
