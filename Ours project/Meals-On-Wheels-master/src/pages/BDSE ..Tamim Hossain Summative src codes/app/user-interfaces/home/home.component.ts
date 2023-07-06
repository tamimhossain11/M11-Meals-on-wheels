import { Component, OnInit } from '@angular/core';

const TOPICS = [
  { topic: 'Work from home' },
  { topic: 'Apprenticeship' },
  { topic: 'Outsourcing' },
  { topic: 'Learning' },
  { topic: 'Remote Job' },
  { topic: 'REspect from world wide' },
];

const FEATUREDJOBS = [
  {
    logo: '../../../assets/jobs/image01.png',
    alt: 'Git hub',
    jobName: 'Front end engineer',
    company: 'Git Hub',
    tags: ['Part time'],
  },
  {
    logo: '../../../assets/jobs/image02.jpg',
    alt: 'Microsoft',
    jobName: 'Web programmer',
    company: 'Qualifician',
    tags: ['Full Time'],
  },
  {
    logo: '../../../assets/jobs/image03.jpg',
    alt: 'Microsoft',
    jobName: 'Fullstack Developer',
    company: 'Valeo.com',
    tags: ['Full Time'],
  },
  {
    logo: '../../../assets/jobs/image04.jpg',
    alt: 'Microsoft',
    jobName: 'App Developer',
    company: 'Flatter',
    tags: ['Full Time'],
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topics = TOPICS;
  jobs = FEATUREDJOBS;

  constructor() {}

  ngOnInit(): void {}
}
