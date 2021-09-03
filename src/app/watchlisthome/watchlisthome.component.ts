import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BuybuttonComponent } from '../buybutton/buybutton.component';
import { WatchListComponent } from '../components/watch-list/watch-list.component';
import { DetailsbuttonComponent } from '../detailsbutton/detailsbutton.component';
import { AuthenticationService } from '../services/authenticate.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-watchlisthome',
  templateUrl: './watchlisthome.component.html',
  styleUrls: ['./watchlisthome.component.css']
})
export class WatchlisthomeComponent implements OnInit {

  constructor(private router: Router, 
    private getDataservice: GetDataService, 
    private loginService:AuthenticationService,
    private http: HttpClient) { }
    columnDefs=[
      
      { headerName: "Stock Symbol", field: "name", sortable:true,filter:true,resizable:true,width:120,cellClass: "grid-cell-centered"},
      { headerName: "Current Rate", field: "current_rate", sortable:true,filter:true,resizable:true,width:120},
      //{ headerName: "Bought Rate", field: "company_id", sortable:true,filter:true,resizable:true,width:120},
      
      { headerName: "Open Rate", field: "open_rate", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Close Rate", field: "close_rate",sortable:true,filter:true,resizable:true,width:100},
      //{ headerName: "Peak Price", field: "peak_rate", sortable:true,filter:true,resizable:true,width:100},
      { headerName: "Volume", field: "volume", sortable:true,filter:true,resizable:true,width:100},
      //{ headerName: "Low Price", field: "least_rate", sortable:true,filter:true,resizable:true,width:100},
      //{ headerName: "Year High", field: "year_low", sortable:true,filter:true,resizable:true,width:100},
      //{ headerName: "Year Low", field: "year_high", sortable:true,filter:true,resizable:true,width:100},
      
    
      { headerName: "Action", field: "company_id", "cellRendererFramework":DetailsbuttonComponent,width:100},
      { headerName: "Action", field: "company_id", "cellRendererFramework":BuybuttonComponent,width:100},
      { headerName: "Action", field: "company_id", "cellRendererFramework":WatchListComponent,width:100},
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":CustomcellComponent,width:100},
      //{ headerName: "Action", field: "company_id", "cellRendererFramework":SellbuttonComponent,width:100},
 
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
this.rowData=this.http.get("http://localhost:8080/watch-list?email="+mailid)
this.rowHeight = 40;


}
}
