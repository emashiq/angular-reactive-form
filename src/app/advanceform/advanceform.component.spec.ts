import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceformComponent } from './advanceform.component';

describe('AdvanceformComponent', () => {
  let component: AdvanceformComponent;
  let fixture: ComponentFixture<AdvanceformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
