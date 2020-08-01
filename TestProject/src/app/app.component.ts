import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'TestProject';
  private isHidden = false;

  constructor() { }

  ngOnInit() { }


  public get shouldHide(): boolean {
    return this.isHidden;
  }

  public hideButton(): void {
    console.log('clicky');
    this.isHidden = true;
  }
}
