import {
  AfterViewChecked,
  Component,
  ElementRef,
  Input,
  ViewChild,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overview } from '../../store/store.state';

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column-chart.component.html',
  styleUrl: './column-chart.component.css',
})
export class ColumnChartComponent implements AfterViewChecked {
  @ViewChild('svg') private svg!: ElementRef;
  private svgHeight = 0;
  private largestValue = 0;
  private dent = 10;
  @Input() public data: Overview = {
    totalCampaigns: 33,
    successfulCampaign: 30,
    pending: 3,
    failed: 10,
  };
  @Input() public colors = ['blue', '#408A7E', 'yellow', 'red'];
  @Input() public barWidth = 50;
  @Input() public svgGap = 50;
  @Input() public height = 400;
  @Input() public width = 600;
  public heights = signal<number[]>([]);
  public yValues = signal<number[]>([]);
  public xValues = signal<number[]>([]);
  public keys = signal<string[]>([]);

  private getDataValues(): void {
    this.keys.set(Object.keys(this.data));
    this.heights.set(Object.values(this.data));
    this.yValues.set(Array(Object.values(this.data).length).fill(0));
    this.largestValue = Math.max(...this.heights());
  }

  public ngAfterViewChecked(): void {
    this.getDataValues();
    this.svgHeight = this.svg.nativeElement.clientHeight;
    const svgWidth = this.svg.nativeElement.clientWidth;
    const tempWidth = svgWidth / this.heights().length - this.svgGap;
    this.barWidth = this.barWidth < tempWidth ? this.barWidth : tempWidth;
    this.heights.set(
      this.heights().map(
        (height) =>
          (height / this.largestValue) * this.svgHeight - this.dent || this.dent
      )
    );
    this.yValues.set(this.heights().map((height) => this.getY(height)));
    this.xValues.set(this.heights().map((_, index) => this.getX(index)));
  }

  private getY(height: number): number {
    return this.svgHeight - height + this.dent;
  }

  private getX(index: number): number {
    return this.svgGap + (this.barWidth + this.svgGap) * index;
  }
}
