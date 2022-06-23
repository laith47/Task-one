import { Pipe, PipeTransform } from '@angular/core';
import { Survey } from 'src/app/survey';
const { isArray } = Array;

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(survey: Survey[], find: string): any{
 
    return find == null || find == '' ? survey : survey.filter((data) =>

        data?.SurveyName?.toLowerCase().includes(find.toLowerCase())
      );
   }
}
