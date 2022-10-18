import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/**
 * Standalone component
 *
 * It brings access to chat feature
 */
@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-home',
  template: ` <button [routerLink]="'/chat'">Go to chat</button> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
