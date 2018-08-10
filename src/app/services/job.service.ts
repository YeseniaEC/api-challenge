import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Job } from '../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  private apiUrl = 'https://jobs.search.gov/jobs/search.json?';

  constructor(private http: HttpClient) { }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}id`);
  }

}
