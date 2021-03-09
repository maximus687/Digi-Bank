import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tea } from '../models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TeaService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Tea>> {
    return this.http.get<Array<Tea>>(
      `${environment.dataService}/tea-categories`,
    );
  }
}
