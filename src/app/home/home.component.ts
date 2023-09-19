import { Component } from '@angular/core';
import { fadeAnimation } from '../app.animation';
import { IWebsite } from '../models/website.model';
import websiteData from '../../data/websites.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fadeAnimation]
})
export class HomeComponent {
  websites: IWebsite[] = websiteData;
}
