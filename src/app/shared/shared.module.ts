import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ConversationComponent, MessagesContainerComponent } from './components';

import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [ConversationComponent, MessageComponent, MessagesContainerComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [ConversationComponent, MessageComponent, MessagesContainerComponent, CommonModule, ReactiveFormsModule]
})
export class SharedModule {}
