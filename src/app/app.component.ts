
import { Component } from '@angular/core';
import { RandomUserService } from './services/random-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  data:any[] = [];
  totalRecords: any;
  page:any;
  max:String="5";
  constructor(private randomUser: RandomUserService ){
    this.data= new Array<any>()
  }

  getUser(){
    this.randomUser.getData().subscribe((data: any) =>{
      console.log("////////////////////////////");
      console.log(data.results);
      console.log("////////////////////////////");
      this.data=data.results;
      this.totalRecords = data.results.length;

    }) 
  }
}
