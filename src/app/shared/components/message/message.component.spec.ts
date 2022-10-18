import { ComponentFixture, TestBed } from '@angular/core/testing';
import { randomUUIDv4 } from '../../helpers';
import { Message, User } from '../../models';
import { MessageComponent } from './message.component';

describe('MessageComponent', () => {
  let component: MessageComponent;
  let fixture: ComponentFixture<MessageComponent>;
  const user: User = { id: '1', name: 'test user' };
  const message: Message = {
    id: randomUUIDv4(),
    text: 'ceci est un message',
    time: Date.now(),
    user
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageComponent);
    component = fixture.componentInstance;

    component.message = message;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have is-author class', () => {
    component.isAuthor = true;
    fixture.detectChanges();
    expect(fixture.nativeElement).toHaveClass('is-author');
  });
});
