import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-survey-dialog',
  templateUrl: './survey-dialog.component.html',
  styleUrls: ['./survey-dialog.component.css']
})
export class SurveyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SurveyDialogComponent>,private router:ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
