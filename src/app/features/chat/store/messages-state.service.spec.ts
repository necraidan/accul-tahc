import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs';
import { Message, randomUUIDv4, User } from 'src/app/shared';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { MessagesStateService } from './messages-state.service';

describe('MessagesStateService', () => {
  let service: MessagesStateService;
  const user: User = { id: '1', name: 'test user' };
  const id = randomUUIDv4();
  const message: Message = {
    id,
    text: 'ceci est un message',
    time: Date.now(),
    user
  };

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LocalStorageService,
          useValue: {
            get: () => [],
            save: () => {}
          }
        }
      ]
    });

    service = new MessagesStateService(TestBed.inject(LocalStorageService));
  });

  it('should has messages$ not null', () => {
    expect(service.messages$).toBeDefined();
  });

  it('should have a message in message list', (done) => {
    service.addMessage(message);

    service.messages$.pipe(take(1)).subscribe((messages: Array<Message>) => {
      expect(messages.length).toEqual(1);
      done();
    });
  });

  it('should have not message in the list', (done) => {
    service.addMessage(message);
    service.deleteMessage(id);

    service.messages$.pipe(take(1)).subscribe((messages: Array<Message>) => {
      expect(messages.length).toEqual(0);
      done();
    });
  });
});
