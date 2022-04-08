import { Component, OnInit } from '@angular/core';
import { SuperuserService } from 'src/app/superuser.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  constructor(private admin:SuperuserService) { 
    
  }

  ngOnInit(): void {
    
    
  }

}
