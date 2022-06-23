import { Component, Input,Output,EventEmitter, OnInit, ViewChild } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Survey } from 'src/app/survey';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HtmlParser } from '@angular/compiler';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  date
  _survey: any;
  icon: any;
  selectedClass: any = "selected_card"
  selectedValue: string;
  selectedCard: any;
  index: any = ""
  dataSource: any;
  sentSurvey:any;
  @Output() testingCard:EventEmitter<any>=new EventEmitter();



  @Input() set survey(survey) {

    this.date = JSON.parse(survey.SurveyPeriods)
    this._survey = survey



  }
  get survey() {
    return this._survey
  }

  changeIcon() {
    if (this.survey.SURVEY_STATUS_EN === 'Published') {
      this.icon = "check_circle"
    }
    else if (this.survey.SURVEY_STATUS_EN === 'Expired') {
      this.icon = "hourglass_bottom"
    }
    return this.icon
  }
  selectedCardValue(data) {
    // console.log(data)
    this.sentSurvey=data;


    // console.log(this.survey)
    // this.selectedCard = (this.survey)
    // console.log("selected card name is:" + this.selectedCard.TemplateName)

  }



  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.surveyService.setMessage(this.sentSurvey)

    this.testingCard.emit('s')
   }



}
