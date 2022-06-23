import { JsonPipe } from '@angular/common';
import { JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/survey';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SurveyDialogComponent } from '../survey-dialog/survey-dialog.component';
import { MatTableDataSource } from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //filter
  filterValue: string
  dataSource: any;
  _survey: any;
  surveyLength: number;
  page: number = 1;
  dateValues=[];



  //toggle
  showCard: boolean = true;
  showList: boolean = false;

  @Input() set homeSurvey(survey) {
    this._survey = survey

    // this.surveyLength = survey.length
    // this.dataSource = new MatTableDataSource<Survey>(survey)

    // for (let index = 0; index < survey.length; index++) {
    //   const element=JSON.parse(survey[index]?.SurveyPeriods)
    //   this.dateValues.push(element)
    // }

    // console.log(this.dateValues)

  }
  get homeSurvey() {
    return this._survey
  }

  date: string[] = []

  //pagination
  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    // this.surveyService.setTitle('Home')
  }
  onToggleShowList() {
    this.showList = true;
    this.showCard = false;
    console.log("toggled List")
  }
  onToggleShowCard() {
    this.showCard = true;
    this.showList = false;
    console.log("toggled card")
  }


}
