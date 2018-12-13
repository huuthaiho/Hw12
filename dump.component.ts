import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump-component',
  template: `
    {{x}}
  `,
  styleUrls: ['./dump.component.css']
})
export class DumpComponent implements OnInit {

  @Input('data') x: string;
  constructor() {}

  ngOnInit() {
  }

}