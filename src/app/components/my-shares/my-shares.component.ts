import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BuybuttonComponent } from 'src/app/buybutton/buybutton.component';
import { CustomcellComponent } from 'src/app/customcell/customcell.component';
import { DetailsbuttonComponent } from 'src/app/detailsbutton/detailsbutton.component';
import { SellbuttonComponent } from 'src/app/sellbutton/sellbutton.component';
//import { CustomdetailsComponent } from 'src/app/customdetails/customdetails.component';
import { AuthenticationService } from 'src/app/services/authenticate.service';
import { GetDataService } from '../../services/get-data.service';
import { BuyComponent } from '../buy/buy.component';

@Component({
  selector: 'app-my-shares',
  templateUrl: './my-shares.component.html',
  styleUrls: ['./my-shares.component.css']
})
export class MySharesComponent implements OnInit {
  
  constructor(private router: Router, 
    private getDataservice: GetDataService, 
    private loginService:AuthenticationService,
    private http: HttpClient) { }
    columnDefs=[
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":SellbuttonComponent,width:100},
      { headerName: "Stock Symbol", field: "name", sortable:true,filter:true,resizable:true,width:120,cellClass: "grid-cell-centered"},
      { headerName: "Current Rate", field: "current_rate", sortable:true,filter:true,resizable:true,width:120},
      { headerName: "Bought Rate", field: "bought_rate", sortable:true,filter:true,resizable:true,width:120},
      { headerName: "Quantity", field: "quantity", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Open Rate", field: "open_rate", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Close Rate", field: "close_rate",sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Peak Price", field: "peak_rate", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Low Price", field: "least_rate", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Year High", field: "year_low", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Year Low", field: "year_high", sortable:true,filter:true,resizable:true,width:100},
    
      { headerName: "Action", field: "company_id", "cellRendererFramework":DetailsbuttonComponent,width:100},
      { headerName: "Action", field: "company_id", "cellRendererFramework":BuybuttonComponent,width:100},
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":SellbuttonComponent,width:100},
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":CustomcellComponent,width:100},
      { headerName: "Action", field: "company_id", "cellRendererFramework":SellbuttonComponent,width:100},
 
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":CustomcellComponent,width:200},
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":DetailsbuttonComponent,width:100},
     //{ headerName: "Action", field: "company_id",cellRendererFramework:(params)=><div>
      //<button>Watch</button></div>},
      //{ headerName: "Action", field: "company_id",width:200,onClick={()=>actionButton(params)},cellRendererParams:(params)=>},
      
      ];
      rowData:any;
      rowHeight: number;
      
    
     
ngOnInit() {
  const mailid=localStorage.getItem("username");
this.rowData=this.http.get("http://localhost:8080/my-share?email="+mailid)
this.rowHeight = 40;

}
  /*constructor(private router: Router,private getDataservice: GetDataService) { }
  myShares;
  ngOnInit() {
    this.getDataservice.getMyShares(localStorage.getItem('username'))
    .subscribe(
      data => {
        if(data.length)
          this.myShares = data;
      },
      error => {
          console.log(error)
      }
    )
  }*/
  goToSellPage(companyId)
  {
    this.router.navigate(['sell',companyId])
  }
  goToBuyPage(companyId)
  {    
    this.router.navigate(['buy',companyId])
  }

  //goToBuyPage(companyId)
  //{    
   // this.router.navigate(['buy',companyId])
 // }
  
  goToDetailedView(companyId)
  {    
    this.router.navigate(['view',companyId])
  }
}
