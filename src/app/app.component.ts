import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { CountdownComponent } from './countdown/countdown.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LobbyComponent, CountdownComponent],
  template: `
    <app-countdown />
    <router-outlet />
  `,
})
export class AppComponent {}
