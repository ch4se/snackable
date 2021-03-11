import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-snack',
  templateUrl: './submit-snack.component.html',
  styleUrls: ['./submit-snack.component.scss']
})
export class SubmitSnackComponent implements OnInit {

  snacktags: string[] = [
    'Crunchy',
    'Sweet',
    'Savory',
    'Sour',
    'Salty',
    'Sticky',
    'Slimy'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
