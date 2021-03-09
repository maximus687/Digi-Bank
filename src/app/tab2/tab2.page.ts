import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { TeaService } from '../core';
import { Tea } from '../models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  teas$: Observable<Array<Tea>>;

  private refresh: Subject<void>;

  constructor(private teaService: TeaService) {
    this.refresh = new Subject();
  }

  ngOnInit() {
    this.teas$ = this.refresh
      .asObservable()
      .pipe(mergeMap(() => this.teaService.getAll()));
  }

  ionViewWillEnter() {
    this.refresh.next();
  }
}
