import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GameComponent} from "./chess/component/game/game.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameComponent, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gamechess';
}
