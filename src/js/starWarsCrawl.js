import { gsap } from 'gsap';

export class StarWarsCrawl {
  constructor() {
    this.container = null;
    this.button = null;
    this.textContainer = null;
    this.isAnimating = false;
  }

  createElements() {
    this.container = document.createElement('div');
    this.container.id = 'space';
    
    this.button = document.createElement('button');
    this.button.id = 'animate-button';
    this.button.innerHTML = '<span>Click</span>';
    
    const perspectiveContainer = document.createElement('div');
    perspectiveContainer.className = 'perspective-container';
    
    this.textContainer = document.createElement('div');
    this.textContainer.className = 'crawl-text-container';
    
    this.textContainer.innerHTML = `
      <h1 class="crawl-text">STAR WARS</h1>
      <h2 class="crawl-text">A Psychedelic Perspective Pen</h2>
      <p class="crawl-text">
        It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.

        Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy…
      </p>
    `;
    
    perspectiveContainer.appendChild(this.textContainer);
    this.container.appendChild(this.button);
    this.container.appendChild(perspectiveContainer);
    
    return this.container;
  }

  bindEvents() {
    this.button.addEventListener('click', () => this.startCrawl());
  }

  startCrawl() {
    if (this.isAnimating) return;
    this.isAnimating = true;

    gsap.to(this.container, {
      duration: 30,
      height: 2250,
      ease: "power1.inOut",
      delay: 6,
      repeat: 1,
      yoyo: true
    });

    gsap.to(this.textContainer, {
      duration: 30,
      y: -500,
      ease: "back.out",
      repeat: 1,
      yoyo: true
    });

    gsap.to(this.textContainer, {
      duration: 25,
      skewX: 40,
      skewY: 30,
      ease: "power2.inOut",
      delay: 7,
      repeat: 1,
      yoyo: true,
      onComplete: () => {
        this.isAnimating = false;
      }
    });
  }
}