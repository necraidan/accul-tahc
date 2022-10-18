import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { randomUUIDv4 } from '../../helpers';
import { Message, User } from '../../models';

/**
 * Conversation component
 *
 * It brings the display of the message list and it handles the message form
 */
@Component({
  selector: 'app-conversation[messages][user]',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConversationComponent {
  /**
   * Input parameter for conversation {@link User}
   */
  @Input() user!: User;

  /**
   * Input parameter for the messages list
   * See {@link Message}
   */
  @Input() messages!: Array<Message>;

  /**
   * Output parameter for the message sent
   * See {@link Message}
   */
  @Output() messageSent = new EventEmitter<Message>();

  /**
   * Form to get the message typed
   */
  chatForm: FormGroup;

  /**
   * Constructor
   * Inject formbuilder to handle form
   */
  constructor(private formBuilder: FormBuilder) {
    this.chatForm = this.formBuilder.nonNullable.group({
      text: ['', Validators.required]
    });
  }

  /**
   * Submit form function
   */
  onSubmit() {
    const textField: AbstractControl<string> | null = this.chatForm.get('text');

    this.messageSent.emit({
      id: randomUUIDv4(),
      user: this.user,
      text: textField?.value ?? '',
      time: Date.now()
    });

    textField?.reset();
  }
}
