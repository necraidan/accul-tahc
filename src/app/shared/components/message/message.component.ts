import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { Message } from '../../models';

/**
 * Message component
 *
 * It brings the display of the message and the style
 */
@Component({
  selector: 'app-message[message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComponent {
  /**
   * Input parameter for the message
   *
   * See {@link Message}
   */
  @Input() message!: Message;

  /**
   * Input parameter that defines the style and position of the message according to the author
   */
  @HostBinding('class.is-author') @Input() isAuthor!: boolean;
}
