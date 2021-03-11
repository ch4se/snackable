import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { SubmitSnackComponent } from '../submit-snack/submit-snack.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  openSnackSubmit(): void {
    this._bottomSheet.open(SubmitSnackComponent)
  }

  ngOnInit(): void {
  }

}
