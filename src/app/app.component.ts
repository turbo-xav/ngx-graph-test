import {Component, OnInit, ViewChild} from '@angular/core';
import {GraphComponent, NgxGraphModule} from "@swimlane/ngx-graph";
import {CommonModule} from "@angular/common";
import {ReplaySubject} from "rxjs";
import * as shape from 'd3-shape';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgxGraphModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  @ViewChild('graph')
  comp!: GraphComponent;

  nodes: any[] = [
    { id: 'creation', label: 'Creation' },
    { id: 'draft', label: 'Draft' },
    { id: 'ordered', label: 'Odered' },
    { id: 'tes-validated', label: 'Tes validated' },
    { id: 'vm-created', label: 'Vm Created by BPM' },
    // Autres nodes
  ];

  links: any[] = [
    { source: 'creation', target: 'draft', label: 'Create' },
    { source: 'draft', target: 'draft', label: 'Save' },
    { source: 'draft', target: 'ordered', label: 'Order' },
    { source: 'ordered', target: 'tes-validated', label: 'Validate' },
    { source: 'ordered', target: 'draft', label: 'Refuse' },
    { source: 'tes-validated', target: 'vm-created', label: 'Create VM' },
    // Autres liens
  ];

  center$: ReplaySubject<boolean> = new ReplaySubject<boolean>();
  zoomToFit$: ReplaySubject<boolean> = new ReplaySubject();

  curve = shape.curveLinear;


  ngOnInit(): void {
    this.center$.next(true)
    this.zoomToFit$.next(true)
    setTimeout(() => {
      this.comp.panTo(100, 100)
    }, 500);
  }
}
