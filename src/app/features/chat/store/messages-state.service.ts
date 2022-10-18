import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LOCAL_STORAGE, Message } from 'src/app/shared';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

/**
 * Message state service
 *
 * It handles messages list for the chat feature
 */
@Injectable({ providedIn: 'root' })
export class MessagesStateService {
  /**
   * Internal subject to handle messages list
   */
  private readonly _messages = new BehaviorSubject<Array<Message>>([]);

  /**
   * Exposed list of messages
   */
  readonly messages$ = this._messages.asObservable();

  /**
   * Constructor
   *
   * Inject LocalStorageService to handle local storage
   *
   * See {@link LocalStorageService}
   */
  constructor(private localStorageService: LocalStorageService) {
    const localStorageMessage: Array<Message> = this.localStorageService.get(LOCAL_STORAGE.CHAT);

    if (localStorageMessage) {
      this._messages.next(localStorageMessage);
    }
  }

  /**
   * Get messages list synchronously
   */
  private getMessage(): Array<Message> {
    return this._messages.getValue();
  }

  /**
   * Set messages list
   */
  private setMessages(messages: Array<Message>) {
    this.localStorageService.save(LOCAL_STORAGE.CHAT, messages);
    this._messages.next(messages);
  }

  /**
   * Add new message to the list
   */
  addMessage(message: Message) {
    const messages = [...this.getMessage(), message];
    this.setMessages(messages);
  }

  /**
   * Delete a message from the list
   */
  deleteMessage(id: string) {
    const messages = this.getMessage().filter((message: Message) => id !== message.id);
    this.setMessages(messages);
  }
}
