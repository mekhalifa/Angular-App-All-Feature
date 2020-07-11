import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-local-json',
  templateUrl: './local-json.component.html',
  styleUrls: ['./local-json.component.scss']
})
export class LocalJsonComponent implements OnInit {

  colorName: any;
  colors: any;
  localUrl = './assets/a.json';
  constructor(private http: HttpClient) {

    http.get(this.localUrl).subscribe((res: any[]) => {

          this.colorName = res.filter((v, i) => res.indexOf(v) === i);
          this.colors = res;

          console.log(this.colors);
          console.log(this.colorName);
    });
   }

  ngOnInit(): void {
  }

}
