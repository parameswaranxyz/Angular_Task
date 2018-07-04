import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  sourceImagePath:string = "assets/Ang.ico";
  task:string = "list works!";
  taskList:string[] = ["reading","writing","swimming","Adding","sleeping"];

  constructor() { }

  ngOnInit() {
  }

  onEdit(){
    console.log("Edit the record");
  }
}
