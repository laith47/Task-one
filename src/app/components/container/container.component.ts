import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SurveyService } from 'src/app/services/survey.service';
import { SurveyDialogComponent } from '../survey-dialog/survey-dialog.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  title!:string
  containerSurveys: any
  searchText = '';
  // recievedSurvey:any;
  dates:any;

  constructor(private surveyService: SurveyService,public dialog: MatDialog) { }

  ngOnInit(): void {
    //passing survey for dialog
    console.log(this.recievedSurvey)

     //API
     console.log("hello")
     this.surveyService.getSurvey().subscribe(data => {
      console.log(data)
      this.containerSurveys = data[0];
      // this.dates=this.containerSurveys.SurveyPeriods
      // debugger
      // console.log(this.dates)

    })

    // this.surveyService.listenToTitle().subscribe(title => {
    //   this.title = title;
    // })
  }
  recievedSurvey=this.surveyService.getMessage()


//DIALOG
  openDialog() {
    this.dialog.open(SurveyDialogComponent,{data:1}).afterClosed().subscribe(res=> {res
console.log(res)
    })
    console.log("dialog")
  }
  showAllSurvayes(){

  }
  showAllExpired(){

  }
  showAllClosed(){

  }
  showAllPublished(){

  }


}
