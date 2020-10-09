import { Injectable } from '@angular/core';
import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    //parse receive your string dd/mm/yyy
    //return a NgbDateStruct
    //calculate year,month and day from "value"
    return { year: year, month: month, day: day };
  }

  format(date: NgbDateStruct): string {
    //receive a NgbDateStruct
    //return a string
    return '' + date.day + '/' + date.month + '/' + date.year;
  }
}
