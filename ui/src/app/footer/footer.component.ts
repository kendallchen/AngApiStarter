import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  thisYear:number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
