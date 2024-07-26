import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LobbyComponent],
  template: `<router-outlet /> `,
})
export class AppComponent {}
