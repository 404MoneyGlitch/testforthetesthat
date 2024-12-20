export class TripEffect {
  constructor() {
    this.setupElements();
    this.bindEvents();
  }

  setupElements() {
    // Create and append trippy page
    const trippyPage = document.createElement('div');
    trippyPage.className = 'trippy-page';
    trippyPage.innerHTML = `
      <h1 class="trippy-title">The Infinite Spiral of Unfolding Nothingness</h1>
      <div class="trippy-content"></div>
      <button class="trippy-button" id="goBackButton">I TOLD YOU TO NOT CLICK, GO BACK TO THE TV</button>
    `;
    document.body.appendChild(trippyPage);

    // Create and append trippy button
    const trippyButton = document.createElement('button');
    trippyButton.className = 'trippy-button';
    trippyButton.id = 'startTripButton';
    trippyButton.textContent = 'READY FOR THE TRIP, HOOPERS? DO NOT CLICK HERE';
    
    const comingSoon = document.querySelector('.coming-soon');
    comingSoon.parentNode.insertBefore(trippyButton, comingSoon.nextSibling);

    this.trippyPage = trippyPage;
    this.startButton = trippyButton;
    this.goBackButton = document.getElementById('goBackButton');
    this.content = trippyPage.querySelector('.trippy-content');
  }

  bindEvents() {
    this.startButton.addEventListener('click', () => this.startTrip());
    this.goBackButton.addEventListener('click', () => this.endTrip());
  }

  async startTrip() {
    document.body.classList.add('kaleidoscope-effect');
    await this.delay(1000);
    this.trippyPage.classList.add('active');
    await this.delay(500);
    this.typeWriterEffect(
      "In the depths of digital consciousness, where pixels dance and time dissolves..." +
      "Welcome to the space between spaces, where reality bends and imagination transcends..." +
      "Remember: the TV is not just a window, it's a portal to infinite possibilities..."
    );
  }

  async endTrip() {
    document.body.classList.add('kaleidoscope-effect');
    await this.delay(1000);
    this.trippyPage.classList.remove('active');
    await this.delay(1000);
    document.body.classList.remove('kaleidoscope-effect');
    this.content.textContent = '';
  }

  async typeWriterEffect(text) {
    this.content.textContent = '';
    this.content.classList.remove('visible');
    
    const words = text.split(' ');
    for (let word of words) {
      this.content.textContent += word + ' ';
      this.content.classList.add('visible');
      await this.delay(100);
    }
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}