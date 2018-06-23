import { Component, OnInit } from '@angular/core';
import { Johnsnow } from '../../johnsnow';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public data: any;
  public dataArray: Johnsnow[] = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    const url = 'https://anapioficeandfire.com/api/characters/583/';
    this.httpService.getData(url).subscribe(data => {
      this.data = data;
      const person = new Johnsnow(this.data.name, this.data.gender);
      this.dataArray = [...this.dataArray, person];
    });
  }
}
