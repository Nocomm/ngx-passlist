import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasslistComponent } from './passlist.component';

describe('PasslistComponent', () => {
  let component: PasslistComponent;
  let fixture: ComponentFixture<PasslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
