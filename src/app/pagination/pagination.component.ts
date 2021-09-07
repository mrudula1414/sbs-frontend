import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../services/authenticate.service';
import { GetDataService } from '../services/get-data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  companyDetails;
  constructor(private router: Router, 
    private getDataservice: GetDataService, 
    private toastr: ToastrService,
    private loginService:AuthenticationService,
    private http: HttpClient) { }
 
  baseUrl = "http://localhost:8080/";
  url="";
  page=0;
  itemsPerPage=5;
  totalItems:any;
  getAllData() {
    this.http.get(`http://localhost:8080/pageable/list?page=${0}&size=${this.itemsPerPage}`).subscribe((data: any) => {
        console.log(data);
        this.companyDetails = data;
        this.page =  0
      })
    };
    gty(page: any){
      this.http.get(`http://localhost:8080/pageable/list?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
        this.companyDetails =  data;
        this.totalItems=data.length
        
      
      })
    }
   
  ngOnInit() {
    
    this.getAllData()
   
  }
}
