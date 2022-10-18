import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Bootstrapped component
 */
@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {}
