import { Component } from '@angular/core';
import { HomeComponent as HomeIcon } from '@components/shared/icons/home/home.component';
import { MovieComponent as MovieIcon } from '@components/shared/icons/movie/movie.component';
import { VideocamComponent as VideocamIcon } from '@components/shared/icons/videocam/videocam.component';
import { LoginComponent as LoginIcon } from '@components/shared/icons/login/login.component';
import { RouterLink, RouterOutlet } from '@angular/router';



const style = {
  button: {
    text: "text-slate-800"
  }
}
const imports = [
  HomeIcon,
  MovieIcon,
  VideocamIcon,
  LoginIcon,
  // RouterOutlet,
  RouterLink
];
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ imports],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  css: typeof style = style;
}
