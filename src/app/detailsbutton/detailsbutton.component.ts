import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailsbutton',
  templateUrl: './detailsbutton.component.html',
  styleUrls: ['./detailsbutton.component.css']
})
export class DetailsbuttonComponent implements OnInit {

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

  goTodetailsPage()
  {    
   
    console.log(this.data)
    this.router.navigate(['view',this.data])
  }

}
