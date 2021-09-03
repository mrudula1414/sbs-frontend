import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authenticate.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-buybutton',
  templateUrl: './buybutton.component.html',
  styleUrls: ['./buybutton.component.css']
})
export class BuybuttonComponent implements OnInit {


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

  goToBuyPage()
  {    
   
    console.log(this.data)
    this.router.navigate(['buy',this.data])
  }
}
