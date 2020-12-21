import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChartNumbersService {
  constructor(public http: HttpClient) {
  }

  getChartData(): Observable<any> {
    return this.http.get('/api-fake/chartData');
  }
}
