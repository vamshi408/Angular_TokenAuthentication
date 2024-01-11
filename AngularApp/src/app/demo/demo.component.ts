import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  hide = true;
  txtName:any;
  txtArea:any;
  pwd:any;
  txtAmount:any;
  selected : any;
  pickerDate:any;
  pickerDate1:any;
}
