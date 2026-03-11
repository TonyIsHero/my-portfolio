import { Component, AfterViewInit, Inject, PLATFORM_ID, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private el: ElementRef) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      const items = this.el.nativeElement.querySelectorAll('.gs-reveal-contact > *');
      
      gsap.from(items, {
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }
  }
}
