import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildofsampleComponent } from './childofsample.component';

describe('ChildofsampleComponent', () => {
  let component: ChildofsampleComponent;
  let fixture: ComponentFixture<ChildofsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildofsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildofsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
