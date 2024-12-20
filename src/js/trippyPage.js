import { triggerTrippy } from './animations.js';
import { StarWarsCrawl } from './starWarsCrawl.js';

export class TrippyPage {
  constructor() {
    this.starWarsCrawl = new StarWarsCrawl();
    this.createElements();
    this.bindEvents();
  }

  createElements() {
    this.page = document.createElement('div');
    this.page.className = 'trippy-page';
    
    this.mainButton = document.createElement('button');
    this.mainButton.className = 'neon-button';
    this.mainButton.textContent = 'READY FOR THE TRIP, HOOPERS? DO NOT CLICK HERE';
    
    this.backButton = document.createElement('button');
    this.backButton.className = 'neon-button';
    this.backButton.textContent = 'I TOLD YOU TO NOT CLICK, GO BACK TO THE TV';
    
    const crawlElement = this.starWarsCrawl.createElements();
    this.page.appendChild(crawlElement);
    this.page.appendChild(this.backButton);
    
    document.querySelector('.coming-soon').after(this.mainButton);
    document.body.appendChild(this.page);
  }

  bindEvents() {
    this.mainButton.addEventListener('click', () => this.showTrippyPage());
    this.backButton.addEventListener('click', () => this.hideTrippyPage());
    this.starWarsCrawl.bindEvents();
  }

  async showTrippyPage() {
    await triggerTrippy(document.body);
    this.page.classList.add('active');
  }

  async hideTrippyPage() {
    await triggerTrippy(document.body);
    this.page.classList.remove('active');
  }
}