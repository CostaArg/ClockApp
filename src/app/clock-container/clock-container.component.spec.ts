import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockContainerComponent } from './clock-container.component';

describe('ClockContainerComponent', () => {
  let component: ClockContainerComponent;
  let fixture: ComponentFixture<ClockContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClockContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
