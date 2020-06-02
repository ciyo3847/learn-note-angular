import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDomComponent } from './get-dom.component';

describe('GetDomComponent', () => {
  let component: GetDomComponent;
  let fixture: ComponentFixture<GetDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
