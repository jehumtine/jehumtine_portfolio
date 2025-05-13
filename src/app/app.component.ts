import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {FooterComponent} from './shared/footer/footer.component';
import {MobileBlockComponent} from './mobile-block/mobile-block.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, MobileBlockComponent,    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'jehumtine';
  isMobile = false;

  ngOnInit(): void {
    const userAgent = navigator.userAgent || navigator.vendor;

    this.isMobile = /android|iphone|ipad|mobile/i.test(userAgent);
  }
}
