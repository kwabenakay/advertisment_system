import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  public div = viewChild<ElementRef>('main');
  public clickX!: number;
  public clickY!: number;
  public mouse!: Observable<unknown>;

  public ngOnInit(): void {
    this.mouse = fromEvent(document, 'mousemove');
  }

  public getStyle() {
    return this.clickX && this.clickY
      ? `background:radial-gradient(circle at ${this.clickX}px ${this.clickY}px, #408a7e86 , #07070700  );
      cursor:none;`
      : 'background-color:none;';
  }

  public handleMouserOver() {
    this.mouse.subscribe((v: any) => {
      this.clickX = v.clientX;
      this.clickY = v.clientY;
    });
  }

  public handleMouseLeave() {
    this.clickX = 0;
    this.clickY = 0;
  }
}
