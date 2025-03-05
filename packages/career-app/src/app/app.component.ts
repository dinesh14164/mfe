import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'career-app';
  jobListings = [
    { title: 'Frontend Developer', description: 'Looking for a skilled frontend developer with experience in Angular, React, and JavaScript.' },
    { title: 'Backend Developer', description: 'Seeking a backend developer proficient in Node.js, Express, and databases.' },
    { title: 'UI/UX Designer', description: 'Hiring a creative UI/UX designer with a keen eye for detail and experience in Figma or Adobe XD.' }
  ];
}
