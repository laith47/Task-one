import { Component, AfterViewInit, OnInit, ViewChild, Input } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Survey } from 'src/app/survey';
import { SurveyService } from 'src/app/services/survey.service';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.css']
})
export class SurveyTableComponent implements OnInit {
  dateValues=[];
  _survey: any;
  surveys: any
  date:any;
  startDate: any;
  endDate: any;
  dataSource: any
  new:any;
  parsed:any;

  @Input() set tableSurvey(survey) {

    this.dataSource = new MatTableDataSource<Survey>(survey)
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    // console.log("this issss" +survey[0].SurveyPeriods)
    // this.parsed = JSON.parse(survey[0]?.SurveyPeriods)

    // this.new = Object.assign({},...this.parsed);
    // console.log(this.new.START_DATE)


    // this.dataSource.data=survey['SurveyPeriods']
debugger
    //***WORKING ****/
    for (let index = 0; index < survey.length; index++) {
    this.dataSource.SurveyPeriods.push(JSON.parse(survey[index]?.SurveyPeriods))}
  // for (let index = 0; index < survey.length; index++) {
    
  //   this.dateValues.push(JSON.parse(survey[index]?.SurveyPeriods))
    
  // }
  // console.log(this.dateValues)
  // ////******************************** */
  // this.date={...this.dateValues}
  //   this.startDate=this.date?.START_DATE
  //   this.endDate=this.date[0].END_DATE



  
    // this.dateValues=JSON.parse(survey[1].SurveyPeriods)

  


    // console.log(this.startDate)
    // console.log(this.endDate)






    // this.startDate={...survey.SurveyPeriods}
    // debugger
    // console.log((this.startDate))

    


  }
  get tableSurvey() {
    return this._survey
  }

  displayedColumns: string[] = ['TemplateName','From','To', 'SurveyPeriods'];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { }

  ngAfterViewInit (){
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {

    // this.surveyService.getSurvey().subscribe(data => {

    //   this.surveys= data[0];

    //   this.dataSource=new MatTableDataSource<Survey>(this.surveys)
    //   this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     debugger
    //     this.date=JSON.parse(data[0].SurveyPeriods)

    //      console.log(this.date)       

    // })
    // console.log(this.date)


  }

}
