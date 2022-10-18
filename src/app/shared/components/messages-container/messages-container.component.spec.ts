import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesContainerComponent } from './messages-container.component';

describe('MessageContainer', () => {
  let component: MessagesContainerComponent;
  let fixture: ComponentFixture<MessagesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesContainerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesContainerComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
