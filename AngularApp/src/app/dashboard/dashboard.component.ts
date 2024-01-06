import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  hide = true;
  txtName:any;
  txtArea:any;
  pwd:any;
  txtAmount:any;
  selected : any;
  pickerDate:any;
  pickerDate1:any;
}
