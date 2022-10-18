import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { Message, User } from '../../models';

/**
 * Messages container component
 *
 * It brings the display of the message list
 */
@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesContainerComponent {
  /**
   * Internal list of messages
   */
  private _messages!: Array<Message>;

  /**
   * Input parameter for conversation {@link User}
   */
  @Input() user!: User;

  /**
   * Input setter for messages
   * it triggers the scrollToBottom
   *
   * See {@link Message}
   */
  @Input() set messages(messages: Array<Message>) {
    this._messages = messages;
    this.scrollToBottom();
  }

  /**
   * Getter for messages
   */
  get messages() {
    return this._messages;
  }

  /**
   * Constructor
   *
   * Inject elementRef to get the ref of this component
   */
  constructor(private elRef: ElementRef) {}

  /**
   * Tracking function for the *ngFor
   *
   * See {@link https://angular.io/api/core/TrackByFunction}
   */
  trackByMessageId(index: number, message: Message): string {
    return message.id;
  }

  /**
   * Scroll to the bottom of the MessagesContainerComponent
   */
  private scrollToBottom() {
    // Excute the function after the current event loop tick
    setTimeout(() => {
      this.elRef.nativeElement.scrollTop = this.elRef.nativeElement.scrollHeight;
    }, 0);
  }
}
