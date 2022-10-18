import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';

describe('ChatComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [RouterModule]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChatComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
