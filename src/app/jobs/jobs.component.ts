import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { Job } from '../interfaces/job';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  public jobs: Job[];
  job: any = [];

  constructor(private jobService: JobService, private http: HttpClient, private route: ActivatedRoute ) { }

  getJobs() {
    this.jobService.getJobs().subscribe((jobs: any) => this.jobs = jobs);
  }

  ngOnInit() {
    this.getJobs();
  }

}
