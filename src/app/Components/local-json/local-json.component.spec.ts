import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalJsonComponent } from './local-json.component';

describe('LocalJsonComponent', () => {
  let component: LocalJsonComponent;
  let fixture: ComponentFixture<LocalJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
