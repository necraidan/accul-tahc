import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { User } from '../../models';
import { MessagesContainerComponent } from '../messages-container/messages-container.component';
import { ConversationComponent } from './conversation.component';

describe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;
  const user: User = { id: '1', name: 'test user' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversationComponent, MessagesContainerComponent],
      imports: [ReactiveFormsModule]
    })
      .overrideComponent(ConversationComponent, {
        set: { changeDetection: ChangeDetectionStrategy.Default } // Pour certains tests, j'ai besoin d'avoir tous les refresh (notamment du set du formulaire, nous ne touchons pas à l'input avec le clavier)
      })
      .compileComponents();

    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;

    // Simulate input binding
    component.user = user;

    // Refresh component after new Input property
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show username', () => {
    const usernameDiv: HTMLDivElement = fixture.debugElement.query(By.css('div[data-karma=username]')).nativeElement;
    expect(usernameDiv.innerHTML).toEqual(`Chat ${user.name}`);
  });

  it("should output message from output 'messageSent' the app", (done) => {
    const text = 'test de message';

    component.chatForm.setValue({ text });
    component.chatForm.updateValueAndValidity();
    fixture.detectChanges();

    const submitButton: HTMLButtonElement = fixture.debugElement.query(By.css('button[type=submit]')).nativeElement;

    component.messageSent.subscribe((message) => {
      expect(message.text).toEqual(text);
      expect(message.user).toEqual({ ...user });
      done();
    });

    //Simulate a click on send Message button
    submitButton.click();
  });
});
