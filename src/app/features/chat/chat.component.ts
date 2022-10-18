import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Message, User } from 'src/app/shared';
import { MessagesStateService } from './store/messages-state.service';

/**
 * Chat component
 * It brings the feature of the chat
 */
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatComponent {
  /**
   * Users for the chat
   *
   * See {@link User}
   */
  readonly users: Array<User> = [
    {
      id: '1',
      name: 'User 1'
    },
    {
      id: '2',
      name: 'User 2'
    }
  ];

  /**
   * List of messages from the state service
   *
   * See {@link MessagesStateService#message$}
   */
  messages$ = this.messagesStateService.messages$;

  /**
   * Constructor
   *
   * Inject MessagesStateService to handle message
   */
  constructor(private messagesStateService: MessagesStateService) {}

  /**
   * Tracking function for the *ngFor
   *
   * See {@link https://angular.io/api/core/TrackByFunction}
   */
  trackByUserId(index: number, user: User): string {
    return user.id;
  }

  /**
   * Function that handle a message from conversation
   */
  onMessageSent(message: Message) {
    this.messagesStateService.addMessage(message);
  }
}
