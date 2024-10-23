import { AfterViewChecked, Component, computed, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from '@components/footer/footer.component';
const imports = [
      RouterOutlet,
      HeaderComponent,
      FooterComponent
]
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [imports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewChecked{
  title = 'srv';
  router = inject(Router)
  isRootRoute = signal(false)
  constructor(private route: ActivatedRoute) {}
  ngAfterViewChecked(): void {
    const currentRoute = this.router.url;
    this.isRootRoute.update(() =>  (currentRoute == '/'));
    console.log(`path is: ${currentRoute}`)
  }
}
