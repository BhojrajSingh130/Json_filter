import { Component, OnInit } from '@angular/core';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'assignment';


  names: any[] = [];

  constructor(private mockService: MockService) { }

  ngOnInit(): void {
    this.mockService.getData()
      .subscribe((data: any) => {
        this.names = data;
        console.log(data);

        const distinctNames:any = [];

        for (let  i = 0; i < data.length; i++){
          const item = data[i];
          if ( !distinctNames[item.name]) {
            distinctNames[item.name] = 1;
          } else {
            distinctNames[item.name]++;
          }
        }

        
        
        this.names = Object.keys(distinctNames).map(name => {
          return { name: name, count: distinctNames[name] };
        });
      });
  }

  getColor(count: number): any {
    if (count > 0 && count < 3) {
      return 'red';
    } else if (count >= 3 && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    } else {
      return '';
    }
  }
}


