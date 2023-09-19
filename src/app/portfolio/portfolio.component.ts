import { Component } from '@angular/core';
import { IWebsite } from '../models/website.model';
import websiteData from '../../data/websites.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  websites: IWebsite[] = websiteData;
}
