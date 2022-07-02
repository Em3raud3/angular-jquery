import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

declare var $: any;


@Directive({
  selector: '[appDatepicker]'
})
export class DatepickerDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    $(this.el.nativeElement).datetimepicker();
  }




}
