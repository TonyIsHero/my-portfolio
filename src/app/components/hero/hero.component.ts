import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const elements = this.el.nativeElement.querySelectorAll('.hero-elem');
      
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.5
      });
    }
  }
}
